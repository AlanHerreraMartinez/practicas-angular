import { NgModule } from '@angular/core'; 

import { CommonModule } from '@angular/common'; 
import { DistanciasComponent } from '../distancias.component'; 

import { FormsModule } from '@angular/forms'; 

import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatRadioModule } from '@angular/material/radio'; 

@NgModule({
  declarations: [
    DistanciasComponent 
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
    DistanciasComponent 
  ]
})
export class DistanciasModule { } 