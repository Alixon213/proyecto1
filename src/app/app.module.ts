import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AlumnoHijoCComponent } from './aprendiz-hijo-c/alumno-hijo-c.component';
import { CaracteristicasAlumnoCComponent } from './caracteristicas-alumno-c/caracteristicas-alumno-c.component';


@NgModule({
  declarations: [
    AppComponent,
    AlumnoHijoCComponent,
    CaracteristicasAlumnoCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
