import { Component } from '@angular/core';

@Component({
  selector: 'app-comunicacion',
  templateUrl: './comunicacion.component.html',
  styleUrls: ['./comunicacion.component.css']
})
export class ComunicacionComponent {
  area: string="Área III: Ciencias Sociales"
    carrera: string="Comunicación"
    descripcion: string="Prepara profesionales para analizar, diseñar y gestionar procesos de comunicación en diversos medios y contextos, contribuyendo al entendimiento social y la difusión de información."
    sedes: string="Se imparte en: Facultad de Ciencias Políticas y Sociales, FES Acatlán"
    url: string="https://oferta.unam.mx/comunicacion.html"
}
