import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Dish } from './model/dish';
import { Ingredient } from './model/ingredient';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

// add plus signs instead of spaces to a string
function plusSeparatedString(s) {
  if(s == undefined || s == "") { return ""; }
  return s.split(" ").reduce((w1,w2) => `${w1}+${w2}`);
}

@Injectable()
export class DishService {
  private recipeUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/"
  private detailedRecipeUrl = (id) => `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information`;
  private headers = new Headers({'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'});

  isLoadingDishes = false;

  numberOfGuests = 0;

  dishes: Dish[] = [];
  dishesInMenu: Dish[] = [];
  selectedDish = null;
  totalMenuPrice = 0;
  constructor(private http: Http) { }

  setSelectedDish(dish) {
    this.selectedDish = dish;
  }

  //Returns the dish that is on the menu for selected type
  getSelectedDish(type): Dish {
    return this.selectedDish;
  }

  //Returns all the dishes on the menu.
  getFullMenu(): Dish[] {
    return this.dishesInMenu;
  }

  //Returns all ingredients for all the dishes on the menu.
  private getAllIngredients() {
    return this.dishesInMenu
      .map(dish => dish.ingredients)
      .reduce((a,b) => a.concat(b),[]);
  }

  getExtendedDish(id: number): Promise<Dish> {
    const url = this.detailedRecipeUrl(id);
    return this.http.get(url, {headers: this.headers})
      // convert the response data to a dish object
      .map(resp => this.dishFromJsonDishData(resp.json()))
      // convert the OBservable to a Promise
      .toPromise()
      // handle any errors in the request
      .catch(this.handleError);
  }


  downloadDishes(type: string, query: string) {
    // empty dishes array before fetching new dishes
    this.dishes = [];
    // set isLoadingDishes to true
    this.isLoadingDishes = true;
    // convert the query to a string that works in urls
    query = plusSeparatedString(query);
    const url = `${this.recipeUrl}search?query=${query}&type=${type}`;
    this.http.get(url, {headers: this.headers})
      // convert the response data to an array of dishes
      .map(resp => {
        const list = resp.json().results as any[];
        return list.map(this.dishFromJsonDishData);
      })
      // convert the Observable to a promise
      .toPromise()
      .then(dishes => {
        // update dishes array when download is complete
        this.dishes = dishes
        // also set isLoadingDishes to false
        this.isLoadingDishes = false
      })
      // handle any errors in the api request
      .catch(this.handleError);
  }

  //Returns the total price of the menu (all the ingredients multiplied by number of guests).
  getTotalMenuPrice(): number {
    return this.getPriceForIngredients(this.getAllIngredients());
  }

  //Returns the price for a given dish
  getDishPrice(dish): number {
    return this.getPriceForIngredients(dish.ingredients);
  }

  //Returns the price for a set of ingredients
  getPriceForIngredients(ingredients: Ingredient[]): number {
    const priceOfIngredients = ingredients
      .map(ingr=>ingr.unitPrice * ingr.amount)
      .reduce((a,b)=>a+b, 0);
    return this.numberOfGuests * priceOfIngredients;
  }

  //Adds the passed dish to the menu. If the dish of that type already exists on the menu
  //it is removed from the menu and the new one added.
  addDishToMenu(dish) {
    //this.dishesInMenu = this.dishesInMenu.filter(d => d.type != dish.type);
    this.dishesInMenu.push(dish);
    this.totalMenuPrice = this.getTotalMenuPrice();
  }

  //Removes dish with the given id from menu
  removeDishFromMenu(id) {
    this.dishesInMenu = this.dishesInMenu.filter(dish => dish.id != id);
    this.totalMenuPrice = this.getTotalMenuPrice();
  }

  // handle api errors
  private handleError(error: any): Promise<any> {
    console.error("An error occured while fetching data", error);
    return Promise.reject(error.message || error);
  }

  // function to convert ingredient API response data to an Ingredient object
  private ingredientFromJsonIngredientData(jsonIngredientData: any): Ingredient {
    if (jsonIngredientData == undefined) return undefined;

    var ingredient = new Ingredient();
    ingredient.id = jsonIngredientData.id as number;
    ingredient.name = jsonIngredientData.name as string;
    ingredient.imageUrl = jsonIngredientData.image as string;
    ingredient.amount = jsonIngredientData.amount as number;
    ingredient.unit = jsonIngredientData.unit as string;
    return ingredient;
  }

  // function to convert dish API response data to a Dish object
  private dishFromJsonDishData(jsonDishData: any): Dish {
    if (jsonDishData == undefined) return undefined;

    var dish = new Dish();
    dish.id = jsonDishData.id as number;
    dish.name = jsonDishData.title as string;
    dish.imageUrl = jsonDishData.image as string;
    if (dish.imageUrl != undefined && !dish.imageUrl.startsWith("http")) {
      dish.imageUrl = `https://spoonacular.com/recipeImages/${dish.imageUrl}`;
    }
    const ingredientsData = jsonDishData.extendedIngredients as any[];
    if (ingredientsData != undefined) {
      dish.ingredients = ingredientsData.map(this.ingredientFromJsonIngredientData);
    }
    dish.pricePerServing = jsonDishData.pricePerServing as number;
    dish.instructions = jsonDishData.instructions as string;
    return dish;
  }
}
