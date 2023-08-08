import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioAprendicesService {

  constructor() { }

  muestraMensaje(mensaje:string){

  alert(mensaje);

  }

}
