import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-dinner',
  templateUrl: './my-dinner.component.html',
  styleUrls: [ './my-dinner.component.css' ]
})
export class MyDinnerComponent {
  nums = [1,2,3,4,5,6,7,8,9,10,11,12];
  numberOfGuests = 0;
};
