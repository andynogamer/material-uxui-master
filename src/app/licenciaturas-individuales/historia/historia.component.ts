import { Component } from '@angular/core';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent {
area: string="Área IV: Humanidades y de las Artes"
    carrera: string="Historia del Arte"
    descripcion: string="Prepara historiadores del arte para investigar, analizar e interpretar las manifestaciones artísticas a lo largo del tiempo y en diversas culturas, contribuyendo a su preservación y difusión."
    sedes: string="Se imparte en: Facultad de Filosofía y Letras, ENES Unidad Morelia"
    url: string="https://oferta.unam.mx/historia.html"
}
