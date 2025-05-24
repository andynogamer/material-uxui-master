import { Component } from '@angular/core';

@Component({
  selector: 'app-telecomunicaciones',
  templateUrl: './telecomunicaciones.component.html',
  styleUrls: ['./telecomunicaciones.component.css']
})
export class TelecomunicacionesComponent {
area:string= "Área I: Ciencias Físico-Matemáticas y de las Ingenierías"
    carrera:string=  "Ingeniería en Telecomunicaciones"
    descripcion: string= "Forma ingenieros especializados en el diseño, implementación y gestión de sistemas y redes de comunicación, como telefonía, internet, radio y televisión."
    sedes: string= "Se imparte en: Facultad de Ingeniería"
    url: string= "https://oferta.unam.mx/telecomunicaciones.html"
}
