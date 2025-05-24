import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnosIndividualServiceComponent } from '../alumnos-individual-service/alumnos-individual-service.component';

@Component({
  selector: 'app-alumnos-page',
  templateUrl: './alumnos-page.component.html',
  styleUrls: ['./alumnos-page.component.css']
})
export class AlumnosPageComponent {
  services = [
    new AlumnosIndividualServiceComponent('school', 'Servicios Escolares (DGAE)', 'Trámites, inscripciones, becas y más.', 'https://www.dgae.unam.mx/'),
    new AlumnosIndividualServiceComponent('computer', 'UNAM en Línea / SUAyED', 'Accede a plataformas y recursos.', 'https://www.unamenlinea.unam.mx/'),
    new AlumnosIndividualServiceComponent('menu_book', 'Bibliotecas UNAM', 'Consulta catálogos y bases de datos.', 'https://www.bibliotecas.unam.mx/'),
    new AlumnosIndividualServiceComponent('group', 'Tu Comunidad UNAM', 'Correo, almacenamiento y herramientas', 'https://www.tucomunidad.unam.mx/')

  ]

  handleCardAction(service: AlumnosIndividualServiceComponent): void {
    window.open(service.url, '_blank')
  }

}
