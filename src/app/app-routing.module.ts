import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateNewDinnerComponent } from './create-new-dinner/create-new-dinner.component';
import { MyDinnerComponent } from './my-dinner/my-dinner.component';
import { SelectDishComponent } from './select-dish/select-dish.component';

import { DishComponent } from './dish/dish.component';
import { OverviewComponent } from './overview/overview.component';
import { PreparationComponent } from './preparation/preparation.component';


const routes: Routes = [
  { path: '', redirectTo: '/create-new-dinner', pathMatch: 'full' },
  { path: 'create-new-dinner', component: CreateNewDinnerComponent },

  { path: 'select-dish', component: SelectDishComponent },
  { path: 'dish/:id', component: DishComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'preparation', component: PreparationComponent },
  { path: 'my-dinner', component: MyDinnerComponent },
  { path: 'select-dish', component: SelectDishComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
