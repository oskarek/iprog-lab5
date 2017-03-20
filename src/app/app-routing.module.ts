import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateNewDinnerComponent } from './create-new-dinner/create-new-dinner.component';
import { MyDinnerComponent } from './my-dinner/my-dinner.component';
import { SelectDishComponent } from './select-dish/select-dish.component';
import { AboutComponent } from './about/about.component';
import { OverviewComponent } from './overview/overview.component';
import { PreparationComponent } from './preparation/preparation.component';

const routes: Routes = [
  { path: '', redirectTo: '/create-new-dinner', pathMatch: 'full' },
  { path: 'create-new-dinner', component: CreateNewDinnerComponent },
  { path: 'select-dish', component: SelectDishComponent },
  { path: 'about', component: AboutComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'preparation', component: PreparationComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
