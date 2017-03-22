import { Component, OnInit , Input, Output} from '@angular/core';
import { DishService } from '../dish.service';
import { Router } from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],

})
export class SearchComponent implements OnInit {

  constructor(public dishService: DishService, public router: Router) { }

	selectedFoodType: string;
	keyWord: string;

	foodTypes = ["appetizer", "main course", "dessert", 
	"side dish", "salad", "bread", "breakfast", "soup", 
	"beverage", "sauce", "drink"];


  ngOnInit() {}

  getInfo(dish) {
    this.router.navigate(['/dish', dish.id]);
  }

  searchDishes(){
    this.dishService.downloadDishes(this.selectedFoodType, this.keyWord);
  }
}
