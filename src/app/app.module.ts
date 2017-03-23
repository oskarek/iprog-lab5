import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AppComponent } from './app.component';
import { CreateNewDinnerComponent } from './create-new-dinner/create-new-dinner.component';
import { MyDinnerComponent } from './my-dinner/my-dinner.component';

import { DishService } from './dish.service';

import { AppRoutingModule } from './app-routing.module';
import { SelectDishComponent } from './select-dish/select-dish.component';

import { SearchComponent } from './search/search.component';
import { DishComponent } from './dish/dish.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { OverviewComponent } from './overview/overview.component';
import { PreparationComponent } from './preparation/preparation.component';
import { OverviewHeaderComponent } from './overview-header/overview-header.component';
import { DishCardComponent } from './dish-card/dish-card.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateNewDinnerComponent,
    MyDinnerComponent,
    SelectDishComponent,
    SearchComponent,
    DishComponent,
    DishDetailComponent,
    OverviewComponent,
    PreparationComponent,
    OverviewHeaderComponent,
    DishCardComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [
    DishService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
