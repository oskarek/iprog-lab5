import { Component, OnInit } from '@angular/core';
import { DishCardComponent } from '../dish-card/dish-card.component';
import { DishService } from '../dish.service';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {

  constructor(public dishService: DishService) { }

}
