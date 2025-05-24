import { Component } from '@angular/core';

@Component({
  selector: 'app-ingenieria-civil',
  templateUrl: './ingenieria-civil.component.html',
  styleUrls: ['./ingenieria-civil.component.css']
})
export class IngenieriaCivilComponent {
    area: string= "Área I: Ciencias Físico-Matemáticas y de las Ingenierías"
    carrera: string= "Ingeniería Civil"
    descripcion: string= "Prepara ingenieros para planificar, diseñar, construir y mantener obras de infraestructura como edificios, puentes, carreteras y sistemas de agua, contribuyendo al desarrollo urbano y rural."
    sedes:string=  "Se imparte en: Facultad de Ingeniería, FES Aragón"
    url: string= "https://oferta.unam.mx/ingenieria-civil.html"
}
