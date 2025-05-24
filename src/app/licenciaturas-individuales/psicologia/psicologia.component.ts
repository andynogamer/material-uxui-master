import { Component } from '@angular/core';

@Component({
  selector: 'app-psicologia',
  templateUrl: './psicologia.component.html',
  styleUrls: ['./psicologia.component.css']
})
export class PsicologiaComponent {
area: string="Área II: Ciencias Biológicas, Químicas y de la Salud"
    carrera:string= "Psicología"
    descripcion: string="Prepara psicólogos para comprender y analizar el comportamiento humano y los procesos mentales, y para intervenir en la prevención y solución de problemas psicológicos en diversos contextos."
    sedes: string="Se imparte en: Facultad de Psicología, FES Iztacala"
    url:string= "https://oferta.unam.mx/psicologia.html"
}
