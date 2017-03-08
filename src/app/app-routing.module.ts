import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateNewDinnerComponent } from './create-new-dinner.component';

const routes: Routes = [
  { path: '', redirectTo: '/create-new-dinner', pathMatch: 'full' },
  { path: 'create-new-dinner', component: CreateNewDinnerComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
