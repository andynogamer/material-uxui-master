import { Component } from '@angular/core';

@Component({
  selector: 'app-odontologia',
  templateUrl: './odontologia.component.html',
  styleUrls: ['./odontologia.component.css']
})
export class OdontologiaComponent {
  area: string="Área II: Ciencias Biológicas, Químicas y de la Salud"
    carrera: string="Odontología"
    descripcion: string="Prepara cirujanos dentistas para prevenir, diagnosticar y tratar enfermedades y afecciones del sistema estomatognático, promoviendo la salud bucal integral."
    sedes: string="Se imparte en: Facultad de Odontología, FES Zaragoza"
    url: string="https://oferta.unam.mx/odontologia.html"
}
