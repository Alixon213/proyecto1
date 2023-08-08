import { Component, OnInit } from '@angular/core';
import { ServicioAprendicesService } from './servicio-aprendices.service';
import { AprendicesService } from './aprendices.service';
import { Alumno } from './aprendiz.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de alumnos';

  constructor(private miServicio:ServicioAprendicesService, private aprendicesService: AprendicesService){

    //this.alumnos=this.aprendicesService.alumnos;

  }

  ngOnInit(): void {

    this.alumnos=this.aprendicesService.alumnos;

  }
  
  alumnos:Alumno[]=[];

  agregarAlumno(){

    let miAlumno=new Alumno(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    
    this.miServicio.muestraMensaje("Nombre del alumno: " + miAlumno.nombre);
    
    this.aprendicesService.agregarAprendizServicio(miAlumno);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0

}
