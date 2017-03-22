import { Component } from '@angular/core';
import { MyDinnerComponent } from '../my-dinner/my-dinner.component';
import { DishService } from '../dish.service';

@Component({
  selector: 'overview-header',
  templateUrl: './overview-header.component.html',
  styleUrls: ['./overview-header.component.css']
})
export class OverviewHeaderComponent {

  constructor(public dishService: DishService) { }

}
