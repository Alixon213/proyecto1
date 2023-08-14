import { Injectable } from "@angular/core";
import { Alumno } from "./alumno.module";
import { ServicioAlumnosService } from "./servicio-alumnos.service";



@Injectable()
export class AlumnosService{

    constructor(private servicioVE: ServicioAlumnosService){}


    
    alumnos:Alumno[]=[

        new Alumno("Alixon","Jimenez","Aprendiz Sena",870000),
        new Alumno("Kevin","Castro","Aprendiz Sena",870000),
        new Alumno("Steven","Velez","Aprendiz Sena",870000),
        new Alumno("lizeth","Benitez","Desarrolladora backend",1160000),

    ];

    agregarAlumnoServicio(alumno:Alumno){

        this.servicioVE.muestraMensaje("Persona que se va a agregar: " + "\n" + alumno.nombre + "\n" + "Salario: " + alumno.salario);

        this.alumnos.push(alumno);
    }


    encontrarAlumno(indice:number){

        let alumno:Alumno=this.alumnos[indice];

        return alumno;

    }

    actualizarAlumno(indice:number, alumno:Alumno){

        let alumnoModificado=this.alumnos[indice];

        alumnoModificado.nombre=alumno.nombre;
        alumnoModificado.apellido=alumno.apellido;
        alumnoModificado.cargo=alumno.cargo;
        alumnoModificado.salario=alumno.salario;

    }

    eliminarAlumno(indice:number){

    this.alumnos.splice(indice,1);

    }


}