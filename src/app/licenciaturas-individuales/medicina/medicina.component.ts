import { Component } from '@angular/core';

@Component({
  selector: 'app-medicina',
  templateUrl: './medicina.component.html',
  styleUrls: ['./medicina.component.css']
})
export class MedicinaComponent {
area: string= "Área II: Ciencias Biológicas, Químicas y de la Salud"
    carrera:string=  "Médico Cirujano"
    descripcion:string=  "Prepara médicos con una formación integral para diagnosticar, tratar y prevenir enfermedades, promoviendo la salud individual y colectiva con ética y humanismo."
    sedes:string=  "Se imparte en: Facultad de Medicina, FES Iztacala, FES Zaragoza"
    url: string= "https://oferta.unam.mx/medicina.html"
}
