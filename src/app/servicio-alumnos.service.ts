import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioAlumnosService {

  constructor() { }

  muestraMensaje(mensaje:string){

    alert(mensaje);

  }

}
