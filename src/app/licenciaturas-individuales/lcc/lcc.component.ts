import { Component } from '@angular/core';

@Component({
  selector: 'app-lcc',
  templateUrl: './lcc.component.html',
  styleUrls: ['./lcc.component.css']
})
export class LccComponent {
area: string= "Área I: Ciencias Físico-Matemáticas y de las Ingenierías";
    carrera: string="Ciencia de la Computación"
    descripcion: string="Forma expertos en el diseño, desarrollo y aplicación de sistemas de software, algoritmos y teorías computacionales para resolver problemas complejos en diversas áreas."
    sedes: string="Se imparte en: Facultad de Ciencias"
    url:string= "https://oferta.unam.mx/lcc.html"
}
