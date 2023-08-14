import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AlumnoHijoCComponent } from './aprendiz-hijo-c/alumno-hijo-c.component';
import { CaracteristicasAlumnoCComponent } from './caracteristicas-alumno-c/caracteristicas-alumno-c.component';
import { ServicioAlumnosService } from './servicio-alumnos.service';
import { AlumnosService } from './alumnos.service';
import { InicioComponentComponent } from './inicio-component/inicio-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes, RouterLink } from '@angular/router';
import { ActualizarComponentComponent } from './actualizar-component/actualizar-component.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';


const appRoutes:Routes=[

  {path:'', component:InicioComponentComponent},
  {path:'proyectos', component:ProyectosComponentComponent},
  {path:'quienes', component:QuienesComponentComponent},
  {path:'contacto', component:ContactoComponentComponent},
  {path:'actualiza/:id', component:ActualizarComponentComponent},
  {path:'**', component:ErrorPersonalizadoComponent}

]


@NgModule({
    declarations: [
        AppComponent,
        AlumnoHijoCComponent,
        CaracteristicasAlumnoCComponent,
        InicioComponentComponent,
        ProyectosComponentComponent,
        QuienesComponentComponent,
        ContactoComponentComponent,
        ActualizarComponentComponent
    ],
    providers: [ServicioAlumnosService, AlumnosService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        RouterLink
    ]
})
export class AppModule { }
