import { Component, Input } from '@angular/core';
import { Dish } from '../model/dish';

@Component({
  selector: 'dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.css']
})
export class DishCardComponent {
  @Input() dish: Dish;
}
