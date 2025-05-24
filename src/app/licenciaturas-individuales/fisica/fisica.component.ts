import { Component } from '@angular/core';

@Component({
  selector: 'app-fisica',
  templateUrl: './fisica.component.html',
  styleUrls: ['./fisica.component.css']
})
export class FisicaComponent {
  area: string="Área I: Ciencias Físico-Matemáticas y de las Ingenierías"
    carrera: string="Física"
    descripcion: string="Prepara científicos para investigar los principios fundamentales del universo, desde las partículas subatómicas hasta las galaxias, mediante la observación, experimentación y modelado teórico."
    sedes: string="Se imparte en: Facultad de Ciencias"
    url: string="https://oferta.unam.mx/fisica.html"
}
