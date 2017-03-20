import { Component, OnInit } from '@angular/core';
import { Dish } from '../model/dish';

@Component({
  selector: 'my-dinner',
  templateUrl: './my-dinner.component.html',
  styleUrls: ['./my-dinner.component.css']
})
export class MyDinnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dishes: Dish[] = [
    {name: 'Garlic bread', type: 'appetizer', unitCost: 40},
    {name: 'Hamburger', type: 'main dish', unitCost: 150},
    {name: 'Cake', type: 'dessert', unitCost: 85}
  ]
  numberOfGuestsOptions = [1,2,3,4,5,6,7,8,9,10,11,12];
  numberOfGuests = 0;

  getDishes(type: string): Dish[] {
    return this.dishes.filter(dish => dish.type == type);
  }
}
