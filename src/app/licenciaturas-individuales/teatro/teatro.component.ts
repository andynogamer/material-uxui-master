import { Component } from '@angular/core';

@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.css']
})
export class TeatroComponent {
area: string="Área IV: Humanidades y de las Artes"
    carrera: string="Teatro y Actuación"
    descripcion: string="Forma profesionales de las artes escénicas con habilidades en actuación, dirección, dramaturgia y producción, para contribuir al desarrollo del teatro y la cultura."
    sedes: string="Se imparte en: Facultad de Filosofía y Letras (CUT)"
    url: string="https://oferta.unam.mx/teatro.html" 
}
