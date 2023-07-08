import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './practicas/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DistanciasModule } from './practicas/distancias/distancias/distancias.module';
import { ResistenciasModule } from './practicas/resistencias/resistencias/resistencias.module';
import { PizzeriaModule } from './practicas/pizzeria/pizzeria/pizzeria.module';
import { CinepolisModule } from './practicas/cinepolis/cinepolis/cinepolis.module';
import { AppRoutingModule } from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DistanciasModule,
    ResistenciasModule,
    PizzeriaModule,
    CinepolisModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
