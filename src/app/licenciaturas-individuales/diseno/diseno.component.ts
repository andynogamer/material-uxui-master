import { Component } from '@angular/core';

@Component({
  selector: 'app-diseno',
  templateUrl: './diseno.component.html',
  styleUrls: ['./diseno.component.css']
})
export class DisenoComponent {

  area:string= "Área IV: Humanidades y de las Artes"
    carrera: string="Diseño y Comunicación Visual"
    descripcion: string="Prepara diseñadores para crear soluciones visuales efectivas que comuniquen mensajes e ideas a través de diversos medios gráficos, digitales e interactivos."
    sedes: string="Se imparte en: Facultad de Artes y Diseño, FES Cuautitlán"
    url: string="https://oferta.unam.mx/diseno.html"
}
