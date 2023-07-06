import {RouterModule, Routes} from '@angular/router'
import {NgModule} from '@angular/core'

import { HomeComponent } from './home/home.component'
import { DistanciasComponent } from './practicas/distancias/distancias.component'
import { ResistenciasComponent } from './practicas/resistencias/resistencias.component'
import { PizzeriaComponent } from './practicas/pizzeria/pizzeria.component'
import { CinepolisComponent } from './practicas/cinepolis/cinepolis.component'

const routes:Routes=[
    {path: '',redirectTo: '/home', pathMatch:'full'},//Esta primera es la redireccion a home pathMatch:'full'
    {path: 'home', component: HomeComponent},
    {path: 'DistanciasComponent', component: DistanciasComponent},
    {path: 'ResistenciasComponent', component: ResistenciasComponent},
    {path: 'PizzeriaComponent', component: PizzeriaComponent},
    {path: 'CinepolisComponent', component: CinepolisComponent}
];

@NgModule({
    imports:[(RouterModule.forRoot(routes))],
    exports:[RouterModule]
})
export class AppRoutingModule{}