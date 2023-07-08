import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { PizzeriaComponent } from '../pizzeria.component';




@NgModule({
  declarations: [
    PizzeriaComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule
  ],
  exports: [
    PizzeriaComponent
  ]
})
export class PizzeriaModule { }
