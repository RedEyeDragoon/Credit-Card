import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardFormsComponent } from './card-forms/card-forms.component';
import { InputComponent } from './input/input.component';
import { CardComponent } from './card/card.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, CardFormsComponent, InputComponent, CardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
