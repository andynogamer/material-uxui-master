import { Component } from '@angular/core';

@Component({
  selector: 'app-derecho',
  templateUrl: './derecho.component.html',
  styleUrls: ['./derecho.component.css']
})
export class DerechoComponent {
area: string="Área III: Ciencias Sociales"
    carrera: string="Derecho"
    descripcion: string="Forma juristas con un profundo conocimiento del sistema legal para interpretar y aplicar las leyes, defender la justicia y contribuir al estado de derecho."
    sedes: string="Se imparte en: Facultad de Derecho, FES Acatlán, FES Aragón"
    url: string="https://oferta.unam.mx/derecho.html"
}
