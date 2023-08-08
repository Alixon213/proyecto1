import { ServicioAprendicesService } from "./servicio-aprendices.service";
import { Alumno } from "./aprendiz.module";
import { Injectable } from "@angular/core";

@Injectable()

export class AprendicesService{

  constructor(private servicioVentanaEmergente: ServicioAprendicesService){

  }

    alumnos:Alumno[]=[

        new Alumno("Alixon","Jimenez","Aprendiz Sena",870000),
        new Alumno("Kevin","Castro","Aprendiz Sena",870000),
        new Alumno("Steven","Velez","Aprendiz Sena",870000),
        new Alumno("lizeth","Benitez","Desarrolladora backend",1160000),
    
      ];

      agregarAprendizServicio(alumno:Alumno){

      this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: " + "\n" + alumno.nombre + "\n" + "Salario: " + alumno.salario);

      this.alumnos.push(alumno);
      }
}