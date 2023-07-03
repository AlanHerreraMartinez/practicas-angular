import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PizzeriaComponent } from '../pizzeria.component';

import { FormsModule } from '@angular/forms'; 

import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatRadioModule } from '@angular/material/radio'; 


@NgModule({
  declarations: [
    PizzeriaComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    MatInputModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatIconModule, 
    MatRadioModule 
  ],
  exports:[
    PizzeriaComponent
  ]
})
export class PizzeriaModule { }
