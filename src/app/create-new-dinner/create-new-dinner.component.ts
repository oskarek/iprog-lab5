import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-new-dinner',
  templateUrl: './create-new-dinner.component.html',
  styleUrls: ['./create-new-dinner.component.css']
})
export class CreateNewDinnerComponent implements OnInit {

  title = "A Home Dinner Service";
  welcomeMessage = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Quisque quis elit eget mauris condimentum tempor.
    Maecenas aliquam viverra est, sit amet ullamcorper felis varius ac.
    Curabitur rutrum neque sit amet enim pretium porta. Nam et metus tortor.`;

  constructor() { }

  ngOnInit() {
  }
}
