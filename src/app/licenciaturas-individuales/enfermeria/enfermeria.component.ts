import { Component } from '@angular/core';

@Component({
  selector: 'app-enfermeria',
  templateUrl: './enfermeria.component.html',
  styleUrls: ['./enfermeria.component.css']
})
export class EnfermeriaComponent {
area: string="Área II: Ciencias Biológicas, Químicas y de la Salud"
    carrera: string="Enfermería"
    descripcion: string="Forma profesionales de enfermería con conocimientos científicos y habilidades para proporcionar cuidados integrales, promover la salud y prevenir enfermedades en individuos, familias y comunidades."
    sedes: string="Se imparte en: FES Iztacala, FES Zaragoza, ENES Unidad León"
    url:string= "https://oferta.unam.mx/enfermeria.html"
}
