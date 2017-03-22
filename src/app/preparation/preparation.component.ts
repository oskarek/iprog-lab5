import { Component } from '@angular/core';
import { Dish } from '../model/dish';
import { DishService } from '../dish.service';

@Component({
  selector: 'preparation',
  templateUrl: './preparation.component.html',
  styleUrls: ['./preparation.component.css']
})
export class PreparationComponent {

  constructor(public dishService: DishService) { }

}
