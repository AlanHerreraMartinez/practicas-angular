import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  cinemaForm: FormGroup;
  cinemas: any[] = [];
  inlineMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.cinemaForm = this.fb.group({
      cinemaName: ['', [Validators.required, Validators.minLength(3)]],
      numberOfBuyers: ['', [Validators.required, Validators.min(1)]],
      numberOfTickets: ['', [Validators.required, Validators.min(1)]],
      card: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.cinemaForm.valid) {
      const cinema = {
        name: this.cinemaForm.get('cinemaName')?.value,
        numberOfBuyers: this.cinemaForm.get('numberOfBuyers')?.value,
        numberOfTickets: this.cinemaForm.get('numberOfTickets')?.value,
        card: this.cinemaForm.get('card')?.value
      };
      const total = this.calculateDiscount(cinema);
      if (total > 0) {
        this.cinemas.push(cinema);
        this.inlineMessage = '¡Pedido terminado con éxito!';
        setTimeout(() => {
          this.inlineMessage = '';
        }, 3000);
      } else {
        this.inlineMessage = 'Error al calcular el descuento';
        setTimeout(() => {
          this.inlineMessage = '';
        }, 3000);
      }
      this.cinemaForm.reset();
    }
  }

  calculateDiscount(cinema: any): number {
    const ticketPrice: number = 12;
    const numberOfTickets: number = cinema.numberOfTickets;
    const numberOfBuyers: number = cinema.numberOfBuyers;

    let discount: number = 0;
    let total: number = 0;

    const ticketLimit = numberOfBuyers * 7;

    if (numberOfTickets <= ticketLimit) {
      if (numberOfTickets > 5) {
        discount = 0.15;
      } else if (numberOfTickets >= 3) {
        discount = 0.10;
      }

      let totalWithoutDiscount: number = numberOfTickets * ticketPrice;
      let totalWithDiscount: number = totalWithoutDiscount - (totalWithoutDiscount * discount);

      if (cinema.card === 'Si') {
        const cardDiscount: number = 0.1;
        totalWithDiscount -= totalWithDiscount * cardDiscount;
      }
      total = totalWithDiscount;
    }

    return total;
  }
}
