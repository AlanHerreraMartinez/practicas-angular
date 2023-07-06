import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {

  // Definimos las variables para capturar los datos del cine.
  cineForm!:FormGroup;
  nombre!:string
  cantidad!:number
  tarjeta!:string
  cantidadBoletos!:number
  valorPagar!:number

  constructor(private readonly fb: FormBuilder){
    this.cineForm=this.initForm()
  }

  onSubmit():void{
    // console.log('Form ->', this.alumnoForm.value)
    this.obtenerDatos();
  }

  obtenerDatos():void{
    this.nombre = this.cineForm.get('nombre')?.value
    this.cantidad = this.cineForm.get('cantidad')?.value
    this.tarjeta = this.cineForm.get('tarjeta')?.value
    this.cantidadBoletos = this.cineForm.get('cantidadBoletos')?.value
    this.valorPagar = this.cineForm.get('valorPagar')?.value
  }

  initForm():FormGroup{
    return this.fb.group({
      // Aquí vamos a definir todos  los campos para el formulario
      nombre:['',[Validators.required,Validators.minLength(3)]],
      cantidad:['',[Validators.required]],
      tarjeta:['',[Validators.required]],
      cantidadBoletos:['', [Validators.required]],
      valorPagar:['',[Validators.required]],
    })
  }


  // Obtenemos la repuesta sobre el el valor
  getTarjeta(): number {
    return this.tarjeta === 'Si' ? 1 : 0;
  }

}
