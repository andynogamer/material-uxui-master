import { Component } from '@angular/core';

@Component({
  selector: 'app-arquitectura',
  templateUrl: './arquitectura.component.html',
  styleUrls: ['./arquitectura.component.css']
})
export class ArquitecturaComponent {
area: string= "Área IV: Humanidades y de las Artes"
    carrera: string="Arquitectura"
    descripcion: string="Forma arquitectos capaces de diseñar y construir espacios habitables y funcionales que integren estética, técnica y consideraciones sociales y ambientales."
    sedes: string="Se imparte en: Facultad de Arquitectura, FES Acatlán, FES Aragón"
    url: string="https://oferta.unam.mx/arquitectura.html"
}
