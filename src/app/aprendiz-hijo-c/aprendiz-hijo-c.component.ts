import { Component, Input, OnInit } from '@angular/core';
import { Alumno } from '../aprendiz.module';

@Component({
  selector: 'app-aprendiz-hijo-c',
  templateUrl: './aprendiz-hijo-c.component.html',
  styleUrls: ['./aprendiz-hijo-c.component.css']
})
export class AprendizHijoCComponent implements OnInit {

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
