import { Component } from '@angular/core';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent {
area: string="Área IV: Humanidades y de las Artes"
    carrera: string="Música - Canto"
    descripcion: string="Forma músicos especializados en la interpretación vocal, con dominio técnico y expresivo para abordar repertorios diversos y participar en la vida musical profesional."
    sedes: string="Se imparte en: Facultad de Música"
    url: string="https://oferta.unam.mx/musica.html"
}
