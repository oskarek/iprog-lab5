import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateNewDinnerComponent } from './create-new-dinner/create-new-dinner.component';
import { MyDinnerComponent } from './my-dinner/my-dinner.component';

const routes: Routes = [
  { path: '', redirectTo: '/create-new-dinner', pathMatch: 'full' },
  { path: 'create-new-dinner', component: CreateNewDinnerComponent },
  { path: 'my-dinner', component: MyDinnerComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
