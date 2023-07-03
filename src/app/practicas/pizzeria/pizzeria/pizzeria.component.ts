import { Component } from '@angular/core';

@Component({
  selector: 'app-pizzeria',
  templateUrl: './pizzeria.component.html',
  styleUrls: ['./pizzeria.component.css']
})
export class PizzeriaComponent {

  // Definimos las variables para capturar los datos de las pizzas.
  nombre!: string;
  direccion!: string;
  telefono!: string;
  fechaCompra!: string;
  tamano!: string;
  ingredientes!: string;
  numeroPizzas!: number;
  subtotal!: number;
  total!: number;
  totalDia!: number;

  // Definimos los valores por cada tamño de pizzas.
  getTamano(): number {
    return this.tamano === 'Chica' ? 'Mediana' ? 40 : 80: 120;

  }

  getIngredientes(): number {
    return this.tamano === 'Jamon' ? 'Piña' ? 10 : 10: 10;

  }

  // Definimos las funciones para hacer el calculo del subtotal de  las pizzas.
  calcular(): void {
    if (this.tamano != null && this.ingredientes != null && this.numeroPizzas != null) {
      const valorSubtotal = ((this.getTamano()) + (this.getIngredientes()) * (this.numeroPizzas));
      this.subtotal = valorSubtotal;

    }
  }

}
