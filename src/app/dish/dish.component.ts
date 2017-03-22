import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Dish } from '../model/dish'
import { DishService } from '../dish.service';


@Component({
  selector: 'dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {

	dish;
	constructor(
	private route: ActivatedRoute,
	private router: Router,
	public dishService: DishService,
	) {}

	ngOnInit() {
		this.dish = {
			name: '',
			imageUrl: "",
			instructions: ""
		}
		let id = +this.route.snapshot.params['id'];

		this.dishService.getExtendedDish(id)
		.then(dish => {
			this.dish = dish;
		});
	}

	addDish() {
		this.dishService.addDishToMenu(this.dish);
	}

}
