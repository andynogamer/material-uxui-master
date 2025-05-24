import { Component } from '@angular/core';

@Component({
  selector: 'app-veterinaria',
  templateUrl: './veterinaria.component.html',
  styleUrls: ['./veterinaria.component.css']
})
export class VeterinariaComponent {
  area: string= "Área II: Ciencias Biológicas, Químicas y de la Salud"
  carrera: string="Medicina Veterinaria y Zootecnia"
  descripcion: string="Forma médicos veterinarios zootecnistas dedicados a la salud y bienestar animal, la producción pecuaria sostenible y la salud pública relacionada con los animales."
  sedes: string="Se imparte en: Facultad de Medicina Veterinaria y Zootecnia, FES Cuautitlán"
  url:string= "https://oferta.unam.mx/veterinaria.html"
}
