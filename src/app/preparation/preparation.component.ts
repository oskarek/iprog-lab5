import { Component, OnInit } from '@angular/core';
import { Dish } from '../model/dish';
import { DishService } from '../dish.service';

@Component({
  selector: 'preparation',
  templateUrl: './preparation.component.html',
  styleUrls: ['./preparation.component.css']
})
export class PreparationComponent implements OnInit {

  constructor(public dishService: DishService) { }

  ngOnInit() {
    var dish = new Dish();
    dish.id = 0;
    dish.name = "Hamburgare";
    this.dishService.addDishToMenu(dish);

    var dish2 = new Dish();
    dish2.id = 1;
    dish2.name = "Kaka";
    this.dishService.addDishToMenu(dish2);
  }

}
