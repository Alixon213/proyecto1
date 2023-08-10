import { Component, Input, OnInit } from '@angular/core';
import { Alumno } from '../alumno.module';

@Component({
  selector: 'app-alumno-hijo-c',
  templateUrl: './alumno-hijo-c.component.html',
  styleUrls: ['./alumno-hijo-c.component.css']
})
export class AlumnoHijoCComponent implements OnInit {

  @Input() alumnoDeLista:Alumno;

  @Input() indice:number;

  constructor() { }

  ngOnInit(): void {
    
  }

  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }

}
