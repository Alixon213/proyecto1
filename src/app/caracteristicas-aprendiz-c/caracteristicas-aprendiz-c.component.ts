import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit, } from '@angular/core';
import { ServicioAprendicesService } from '../servicio-aprendices.service';
import { AprendicesService } from '../aprendices.service';


@Component({
  selector: 'app-caracteristicas-aprendiz-c',
  templateUrl: './caracteristicas-aprendiz-c.component.html',
  styleUrls: ['./caracteristicas-aprendiz-c.component.css']
})
export class CaracteristicasAprendizCComponent implements OnInit{

  @Output() caracteristicasAprendiz = new EventEmitter<string>();

  //constructor(private miSevicio:ServicioAprendicesService, private servi:AprendicesService) { }

  ngOnInit(): void {
  }

  agregaCaracteristicas(value: string) {
    //this.miSevicio.muestraMensaje(value);
    this.caracteristicasAprendiz.emit(value);
  }

}
