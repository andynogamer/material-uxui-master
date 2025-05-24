import { Component } from '@angular/core';

@Component({
  selector: 'app-qfb',
  templateUrl: './qfb.component.html',
  styleUrls: ['./qfb.component.css']
})
export class QfbComponent {
area: string="Área II: Ciencias Biológicas, Químicas y de la Salud"
    carrera: string= "Química Farmacéutico Biológica"
    descripcion: string= "Forma profesionales expertos en el desarrollo, producción, control y dispensación de medicamentos, así como en el análisis clínico y toxicológico para el cuidado de la salud."
    sedes: string= "Se imparte en: Facultad de Química, FES Cuautitlán, FES Zaragoza"
    url: string= "https://oferta.unam.mx/qfb.html"
}
