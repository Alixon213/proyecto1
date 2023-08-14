import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioAlumnosService } from '../servicio-alumnos.service';
import { AlumnosService } from '../alumnos.service';
import { Alumno } from '../alumno.module';

@Component({
  selector: 'app-actualizar-component',
  templateUrl: './actualizar-component.component.html',
  styleUrls: ['./actualizar-component.component.css']
})
export class ActualizarComponentComponent {
  titulo: any;


  constructor(private router:Router, private route:ActivatedRoute, private miServicio:ServicioAlumnosService, private alumnosService:AlumnosService) {}

  alumnos:Alumno[]=[];

  accion:number;

  ngOnInit(): void {

    this.accion=parseInt(this.route.snapshot.queryParams['accion']);

    this.alumnos=this.alumnosService.alumnos;  
  
    this.indice=this.route.snapshot.params['id'];

    let alumno:Alumno=this.alumnosService.encontrarAlumno(this.indice);

    this.cuadroNombre=alumno.nombre;
    this.cuadroApellido=alumno.apellido;
    this.cuadroCargo=alumno.cargo;
    this.cuadroSalario=alumno.salario;

  }

  volverInicio(){

    this.router.navigate(['']);

  }

  /*actualizaAlumno(){

    let miAlumno=new Alumno(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miAlumno.nombre);
    this.alumnosService.actualizarAlumno(this.indice, miAlumno);

    this.router.navigate(['']);

  }

  eliminaAlumno(){

    this.alumnosService.eliminarAlumno(this.indice);

    this.router.navigate(['']);    

  }*/

  actualizaAlumno(){

    if(this.accion==1){

        let miAlumno=new Alumno(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
        //this.miServicio.muestraMensaje("Nombre del empleado: " + miAlumno.nombre);
        this.alumnosService.actualizarAlumno(this.indice, miAlumno);

        this.router.navigate(['']);
    }else {

        this.alumnosService.eliminarAlumno(this.indice);

        this.router.navigate(['']);
    }
  }




  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0

  indice:number;
  
}
