import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Pizza {
  tamano: string;
  ingredientes: string[];
  numeroPizzas: number;
  subtotal: number;
  nombreCliente: string;
}

@Component({
  selector: 'app-pizzeria',
  templateUrl: './pizzeria.component.html',
  styleUrls: ['./pizzeria.component.css']
})
export class PizzeriaComponent implements OnInit {
  clienteForm!: FormGroup;
  pizzas: Pizza[] = [];
  totalDia = 0;
  terminado = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      tamano: ['', Validators.required],
      ingredientes: [[]],
      numeroPizzas: [0, Validators.required]
    });
  }

  agregarPizza(): void {
    const subtotal = this.calcularSubtotal();
    const pizza: Pizza = {
      tamano: this.clienteForm.value.tamano,
      ingredientes: this.clienteForm.value.ingredientes,
      numeroPizzas: this.clienteForm.value.numeroPizzas,
      subtotal: subtotal,
      nombreCliente: this.clienteForm.value.nombre
    };

    this.pizzas.push(pizza);
    this.totalDia += subtotal;

    this.clienteForm.patchValue({
      tamano: '',
      ingredientes: [],
      numeroPizzas: 0
    });
  }

  quitarPizza(index: number): void {
    const pizza = this.pizzas[index];
    this.totalDia -= pizza.subtotal;
    this.pizzas.splice(index, 1);
  }

  toggleIngrediente(ingrediente: string): void {
    const ingredientes = this.clienteForm.get('ingredientes')!.value as string[];
    const index = ingredientes.indexOf(ingrediente);
    if (index > -1) {
      ingredientes.splice(index, 1);
    } else {
      ingredientes.push(ingrediente);
    }
  }

  calcularSubtotal(): number {
    let subtotal = 0;

    switch (this.clienteForm.value.tamano) {
      case 'Chica':
        subtotal += 40;
        break;
      case 'Mediana':
        subtotal += 80;
        break;
      case 'Grande':
        subtotal += 120;
        break;
    }

    subtotal += this.clienteForm.value.ingredientes.length * 10;
    subtotal *= this.clienteForm.value.numeroPizzas;

    return subtotal;
  }

  terminarPedido(): void {
    const confirmacion = confirm('¿Desea continuar con dar por terminado el pedido?');

    if (confirmacion) {
      this.terminado = true;
    }
  }

  resetForm(): void {
    this.clienteForm.reset();
    this.pizzas = [];
    this.totalDia = 0;
    this.terminado = false;
  }
}
