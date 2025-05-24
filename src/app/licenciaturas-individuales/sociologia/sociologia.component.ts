import { Component } from '@angular/core';

@Component({
  selector: 'app-sociologia',
  templateUrl: './sociologia.component.html',
  styleUrls: ['./sociologia.component.css']
})
export class SociologiaComponent {
area:string= "Área III: Ciencias Sociales"
    carrera: string="Sociología"
    descripcion: string="Forma sociólogos para investigar y analizar las estructuras, procesos y problemas sociales, con el fin de proponer soluciones y contribuir a la transformación social."
    sedes: string="Se imparte en: Facultad de Ciencias Políticas y Sociales, FES Acatlán"
    url: string="https://oferta.unam.mx/sociologia.html"
}
