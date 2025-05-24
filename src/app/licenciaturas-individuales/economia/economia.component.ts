import { Component } from '@angular/core';

@Component({
  selector: 'app-economia',
  templateUrl: './economia.component.html',
  styleUrls: ['./economia.component.css']
})
export class EconomiaComponent {
area: string="Área III: Ciencias Sociales"
    carrera: string="Economía"
    descripcion: string="Prepara economistas para analizar los fenómenos económicos, formular políticas y estrategias que promuevan el desarrollo económico y el bienestar social."
    sedes: string="Se imparte en: Facultad de Economía, FES Acatlán"
    url: string="https://oferta.unam.mx/economia.html"
}
