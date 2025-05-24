import { Component } from '@angular/core';

@Component({
  selector: 'app-letras',
  templateUrl: './letras.component.html',
  styleUrls: ['./letras.component.css']
})
export class LetrasComponent {
area:string= "Área IV: Humanidades y de las Artes"
    carrera: string="Letras Hispánicas"
    descripcion: string="Prepara especialistas en la lengua española y las literaturas hispánicas, capaces de analizar, interpretar y difundir el patrimonio literario y lingüístico."
    sedes: string="Se imparte en: Facultad de Filosofía y Letras, FES Acatlán"
    url: string="https://oferta.unam.mx/letras.html"
}
