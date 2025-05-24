import { Component } from '@angular/core';

@Component({
  selector: 'app-filosofia',
  templateUrl: './filosofia.component.html',
  styleUrls: ['./filosofia.component.css']
})
export class FilosofiaComponent {
area: string="Área IV: Humanidades y de las Artes"
    carrera: string="Filosofía"
    descripcion: string="Forma filósofos con capacidad crítica y analítica para reflexionar sobre los problemas fundamentales de la existencia, el conocimiento, la verdad, la moral y el lenguaje."
    sedes: string="Se imparte en: Facultad de Filosofía y Letras"
    url: string="https://oferta.unam.mx/filosofia.html"
}
