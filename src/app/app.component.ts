import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumno.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de alumnos';

  constructor(){

    //this.alumnos=this.alumnosService.alumnos;

  }

  ngOnInit(): void {

  }
  
  alumnos:Alumno[]=[
      new Alumno("Alixon","Jimenez","Aprendiz Sena",870000),
      new Alumno("Kevin","Castro","Aprendiz Sena",870000),
      new Alumno("Steven","Velez","Aprendiz Sena",870000),
      new Alumno("lizeth","Benitez","Desarrolladora backend",1160000),
  ];

  agregarAlumno(){

    let miAlumno=new Alumno(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.alumnos.push(miAlumno);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0

}
