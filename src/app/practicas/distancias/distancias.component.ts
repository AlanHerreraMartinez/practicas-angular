// Aquí definimos las funcionalidades del programa.
import { Component } from '@angular/core';

@Component({
  selector: 'app-distancias',
  templateUrl: './distancias.component.html',
  styleUrls: ['./distancias.component.css']
})

export class DistanciasComponent {
  // Definimos las variables necesaraias para hacer el calculo correspondiente
  x1!:number
  x2!:number
  y1!:number
  y2!:number
  resultado:number = 0;

  calcularDistancias(){
    // De esta manera hacemos el calculo, para obtener las distancias entre dos puntos.
    // Formula: d=√((x_2-x_1)²+(y_2-y_1)²)
    this.resultado = Math.sqrt(Math.pow((this.x2 - this.x1),2) + Math.pow((this.y2 - this.y1),2))

  }

}