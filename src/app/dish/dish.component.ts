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

	dish: Dish;
	isLoading: boolean = false;
	constructor(
	private route: ActivatedRoute,
	private router: Router,
	public dishService: DishService,
	) {}

	ngOnInit() {

		let id = +this.route.snapshot.params['id'];

		this.isLoading = true;
		this.dishService.getExtendedDish(id)
		.then(dish => {
			this.dish = dish;
			this.dishService.setSelectedDish(dish);
			this.isLoading = false;
		});
	}

	addDish() {
		this.dishService.addDishToMenu(this.dish);
	}

}
