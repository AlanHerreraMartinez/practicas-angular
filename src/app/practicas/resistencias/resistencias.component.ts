// Aquí definimos las funcionalidades del programa.
import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})

export class ResistenciasComponent {
  // Definimos los colores de las resitencias con su respectivo hexadecimal.
  bandas: any[] = [
    { color: 'Negro', valor: '0', hex: '#000000' },
    { color: 'Cafe', valor: '1', hex: '#8B4513' },
    { color: 'Rojo', valor: '2', hex: '#FF0000' },
    { color: 'Naranja', valor: '3', hex: '#FFA500' },
    { color: 'Amarillo', valor: '4', hex: '#FFFF00' },
    { color: 'Verde', valor: '5', hex: '#008000' },
    { color: 'Azul', valor: '6', hex: '#0000FF' },
    { color: 'Morado', valor: '7', hex: '#800080' },
    { color: 'Gris', valor: '8', hex: '#808080' },
    { color: 'Blanco', valor: '9', hex: '#FFFFFF' }
  ];

  // Definimos las variables necesaraias para hacer el calculo correspondiente
  banda1!: string;
  banda2!: string;
  multiplicador!: string;
  tolerancia!: string;
  valor!: number;
  toleranciaMin!: number;
  toleranciaMax!: number;

// Definimos las funciones para hacer el calculo y obtener los colores para rellenarlos.wac 
  calcular(): void {
    if (this.banda1 != null && this.banda2 != null && this.multiplicador != null) {
      const valorResistencia = (parseInt(this.banda1) * 10 + parseInt(this.banda2)) * Math.pow(10, parseInt(this.multiplicador));
      this.valor = valorResistencia;
      this.toleranciaMin = valorResistencia - (valorResistencia * this.getToleranciaFactor());
      this.toleranciaMax = valorResistencia + (valorResistencia * this.getToleranciaFactor());

    }
  }

  getToleranciaFactor(): number {
    return this.tolerancia === 'dorado' ? 0.05 : 0.1;

  }

  getBandaColor(valor: string): any {
    return this.bandas.find((banda) => banda.valor === valor);

  }

  getToleranciaColor(tolerancia: string): string {
    return tolerancia === 'dorado' ? '#FFD700' : tolerancia === 'plateado' ? '#C0C0C0' : '';

  }

}