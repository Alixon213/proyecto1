import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit, } from '@angular/core';
import { ServicioAlumnosService } from '../servicio-alumnos.service';

@Component({
  selector: 'app-caracteristicas-alumno-c',
  templateUrl: './caracteristicas-alumno-c.component.html',
  styleUrls: ['./caracteristicas-alumno-c.component.css']
})
export class CaracteristicasAlumnoCComponent implements OnInit{

  @Output() caracteristicasAlumno = new EventEmitter<string>();

  //constructor(private miSevicio:ServicioAlumnosService) { }

  ngOnInit(): void {
  }

  agregaCaracteristicas(value: string) {
    //this.miSevicio.muestraMensaje(value);
    this.caracteristicasAlumno.emit(value);
  }

}
