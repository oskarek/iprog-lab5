import { Component, OnInit } from '@angular/core';
import { Dish } from '../model/dish';
import { Ingredient } from '../model/ingredient';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(public dishService: DishService) { }

  // add a dish to the menu
  addDish(id: number) {
    var dish = new Dish();
    dish.id = id;
    if (id == 0) {
      dish.name = "Magnum Choklad";
      dish.type = "appetizer";
      dish.pricePerServing = 10;
      const ingredient = new Ingredient();
      ingredient.name = "choklad";
      ingredient.amount = 5;
      ingredient.unitPrice = 3;
      dish.ingredients = [ingredient];
    }
    if (id == 1) {
      dish.name = "Hamburgare";
      dish.type = "main dish";
      dish.pricePerServing = 5;
      const ingredient = new Ingredient();
      ingredient.name = "humburgare";
      ingredient.amount = 2;
      ingredient.unitPrice = 6;
      dish.ingredients = [ingredient];
    }
    this.dishService.addDishToMenu(dish)
  }

  // this will be called when the component is first loaded
  ngOnInit() {
    this.dishService.numberOfGuests = 1;
    this.dishService.downloadDishes("main course", "pizza");
  }

}
