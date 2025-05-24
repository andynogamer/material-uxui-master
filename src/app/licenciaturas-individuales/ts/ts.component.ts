import { Component } from '@angular/core';

@Component({
  selector: 'app-ts',
  templateUrl: './ts.component.html',
  styleUrls: ['./ts.component.css']
})
export class TsComponent {
area: string="Área III: Ciencias Sociales"
    carrera: string="Trabajo Social"
    descripcion: string="Prepara trabajadores sociales para promover el cambio social, resolver problemas en las relaciones humanas y fortalecer a individuos y comunidades para mejorar su bienestar."
    sedes: string="Se imparte en: Escuela Nacional de Trabajo Social"
    url: string="https://oferta.unam.mx/ts.html"
}
