import { Component } from '@angular/core';

@Component({
  selector: 'app-biologia',
  templateUrl: './biologia.component.html',
  styleUrls: ['./biologia.component.css']
})
export class BiologiaComponent {
area:string= "Área II: Ciencias Biológicas, Químicas y de la Salud"
    carrera: string="Biología"
    descripcion: string="Forma científicos dedicados al estudio de los seres vivos, su origen, evolución, estructura, función y relaciones con el medio ambiente, para la conservación y aprovechamiento sostenible."
    sedes:string= "Se imparte en: Facultad de Ciencias, FES Iztacala, FES Zaragoza"
    url: string="https://oferta.unam.mx/biologia.html"
}
