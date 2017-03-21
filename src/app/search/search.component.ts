import { Component, OnInit , Input, Output} from '@angular/core';
import { DishService } from '../dish.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],

})
export class SearchComponent implements OnInit {

  constructor(public dishService: DishService) { }

	selectedFoodType: string;
	keyWord: string;

	foodTypes = ["appetizer", "main course", "dessert", 
	"side dish", "salad", "bread", "breakfast", "soup", 
	"beverage", "sauce", "drink"];


  ngOnInit() {
  }

}
