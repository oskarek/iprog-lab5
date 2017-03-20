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

import { AppRoutingModule } from './app-routing.module';
import { SelectDishComponent } from './select-dish/select-dish.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateNewDinnerComponent,
    MyDinnerComponent,
    SelectDishComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
