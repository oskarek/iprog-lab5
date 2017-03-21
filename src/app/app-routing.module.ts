import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateNewDinnerComponent } from './create-new-dinner/create-new-dinner.component';
import { MyDinnerComponent } from './my-dinner/my-dinner.component';
import { SelectDishComponent } from './select-dish/select-dish.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', redirectTo: '/create-new-dinner', pathMatch: 'full' },
  { path: 'create-new-dinner', component: CreateNewDinnerComponent },
  { path: 'my-dinner', component: MyDinnerComponent },
  { path: 'select-dish', component: SelectDishComponent },
  { path: 'test', component: TestComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
