import { Component } from '@angular/core';

@Component({
  selector: 'app-matematicas',
  templateUrl: './matematicas.component.html',
  styleUrls: ['./matematicas.component.css']
})
export class MatematicasComponent {
area:string= "Área I: Ciencias Físico-Matemáticas y de las Ingenierías"
    carrera: string="Matemáticas Aplicadas"
    descripcion: string="Desarrolla profesionales con una sólida formación en matemáticas y su aplicación en la modelización y solución de problemas en ciencia, ingeniería, finanzas y otras disciplinas."
    sedes: string="Se imparte en: Facultad de Ciencias, FES Acatlán"
    url: string="https://oferta.unam.mx/matematicas.html"
}
