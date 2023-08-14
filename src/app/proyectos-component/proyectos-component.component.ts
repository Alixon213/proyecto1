import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioAlumnosService } from '../servicio-alumnos.service';
import { AlumnosService } from '../alumnos.service';
import { Alumno } from '../alumno.module';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {
titulo: any;

  constructor(private router:Router, private miServicio:ServicioAlumnosService, private alumnosService:AlumnosService) {}

  alumnos:Alumno[]=[];

  ngOnInit(): void {
    this.alumnos=this.alumnosService.alumnos;  }

  volverInicio(){

    this.router.navigate(['']);

  }

  agregarAlumno(){

    let miAlumno=new Alumno(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miAlumno.nombre);
    this.alumnosService.agregarAlumnoServicio(miAlumno);

    this.router.navigate(['']);

  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0


}
