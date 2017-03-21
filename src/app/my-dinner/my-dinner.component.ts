import { Component, OnInit } from '@angular/core';
import { Dish } from '../model/dish';
import { DishService } from '../dish.service';

@Component({
  selector: 'my-dinner',
  templateUrl: './my-dinner.component.html',
  styleUrls: ['./my-dinner.component.css']
})
export class MyDinnerComponent implements OnInit {

  numberOfGuestsOptions = [1,2,3,4,5,6,7,8,9,10,11,12];
  dishes: Dish[];

  constructor(public dishService: DishService) { 
    this.dishes = this.dishService.getFullMenu();

  }

  ngOnInit() {
  }
}
