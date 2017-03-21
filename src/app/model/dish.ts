import { Ingredient } from './ingredient';

export class Dish {
  id: number;
  name: string;
  imageUrl: string;
  type: string;
  ingredients: Ingredient[] = [];
  pricePerServing: number;
  instructions: string;
}
// export enum DishType {
//   Appetizer,
//   MainCourse,
//   Dessert,
//   SideDish,
//   Salad,
//   Bread,
//   Breakfast,
//   Soup,
//   Beverage,
//   Sauce,
//   Drink
// }
//
// export class Dish {
//   name: string;
//   type: DishType;
//   typeString(): string {
//     switch (this.type) {
//       case DishType.Appetizer: return 'appetizer';
//       case DishType.MainCourse: return 'main course';
//       case DishType.Dessert: return 'dessert';
//       case DishType.SideDish: return 'side dish';
//       case DishType.Salad: return 'salad';
//       case DishType.Breakfast: return 'breakfast';
//       case DishType.Soup: return 'soup';
//       case DishType.Beverage: return 'beverage';
//       case DishType.Sauce: return 'sauce';
//       case DishType.Drink: return 'drink';
//     }
//   }
// }
