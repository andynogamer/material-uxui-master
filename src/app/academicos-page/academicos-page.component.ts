import { Component } from '@angular/core';
import { AcademicosIndividualComponent } from '../academicos-individual-service/academicos-individual-service.component';

@Component({
  selector: 'app-academicos-page',
  templateUrl: './academicos-page.component.html',
  styleUrls: ['./academicos-page.component.css']
})
export class AcademicosPageComponent {
services = [
    new AcademicosIndividualComponent('computer', 'Aulas Virtuales',  'https://www.unamenlinea.unam.mx/pagina/aulas-virtuales'),
    new AcademicosIndividualComponent('workspace_premium', 'Becas y Estímulos Académicos UNAM',  'https://dgapa.unam.mx/index.php/estimulos-y-apoyos'),
    new AcademicosIndividualComponent('calendar_month', 'Calendario Académico',  'https://www.bibliotecas.unam.mx/'),
    new AcademicosIndividualComponent('map', 'Estancias UNAM',  'https://www.tucomunidad.unam.mx/'),
    new AcademicosIndividualComponent('gavel', 'Normatividad',  'https://dgapa.unam.mx/index.php/estimulos-y-apoyos'),
    new AcademicosIndividualComponent('group', 'Servicios para Docencia y Tutoría UNAM',  'https://www.bibliotecas.unam.mx/'),
    new AcademicosIndividualComponent('build', 'Servicios (Generales para Académicos)',  'https://www.tucomunidad.unam.mx/')

  ]

  handleCardAction(service: AcademicosIndividualComponent): void {
    window.open(service.url, '_blank')
  }
}
