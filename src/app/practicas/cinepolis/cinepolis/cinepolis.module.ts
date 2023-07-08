import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CinepolisComponent } from '../cinepolis.component';



@NgModule({
  declarations: [
    CinepolisComponent
  ],
  imports: [
    ReactiveFormsModule, 
    BrowserModule
  ],
  exports:[
    CinepolisComponent
  ]
})
export class CinepolisModule { }
