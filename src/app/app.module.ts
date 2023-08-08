import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AprendizHijoCComponent } from './aprendiz-hijo-c/aprendiz-hijo-c.component';
import { CaracteristicasAprendizCComponent } from './caracteristicas-aprendiz-c/caracteristicas-aprendiz-c.component';
import { ServicioAprendicesService } from './servicio-aprendices.service';
import { AprendicesService } from './aprendices.service';

@NgModule({
  declarations: [
    AppComponent,
    AprendizHijoCComponent,
    CaracteristicasAprendizCComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServicioAprendicesService, AprendicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
