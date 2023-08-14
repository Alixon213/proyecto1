import { Component, OnInit} from '@angular/core';
import { Alumno } from '../alumno.module';
import { ServicioAlumnosService } from '../servicio-alumnos.service';
import { AlumnosService } from '../alumnos.service';

@Component({
  selector: 'app-inicio-component',
  templateUrl: './inicio-component.component.html',
  styleUrls: ['./inicio-component.component.css']
})
export class InicioComponentComponent implements OnInit{
  titulo = 'Listado de alumnos';

  constructor(private miServicio:ServicioAlumnosService, private alumnosService:AlumnosService) {

    //this.alumnos=this.alumnosService.alumnos;

  }

  ngOnInit(): void {
  
    this.alumnos=this.alumnosService.alumnos;

  }

  alumnos:Alumno[]=[];

  agregarAlumno(){

    let miAlumno=new Alumno(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miAlumno.nombre);
    this.alumnosService.agregarAlumnoServicio(miAlumno);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0

}
