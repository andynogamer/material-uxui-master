import { Component } from '@angular/core';
import { LicenciaturaIndividual } from '../licenciatura-individual/licenciatura-individual.component';
@Component({
  selector: 'app-licenciaturas-page',
  templateUrl: './licenciaturas-page.component.html',
  styleUrls: ['./licenciaturas-page.component.css']
})
export class LicenciaturasPageComponent {
todasLasLicenciaturas: LicenciaturaIndividual[] = [
  // Área I: Ciencias Físico-Matemáticas y de las Ingenierías
  {
    id:'/licenciaturas/actuaria',
    area: "Área I: Ciencias Físico-Matemáticas y de las Ingenierías",
    carrera: "Actuaría",
    seImparte: "Se imparte en: Facultad de Ciencias, FES Acatlán"
  },
  {
    id:'/licenciaturas/ingenieria-civil',
    area: "Área I: Ciencias Físico-Matemáticas y de las Ingenierías",
    carrera: "Ingeniería Civil",
    seImparte: "Se imparte en: Facultad de Ingeniería, FES Aragón"
  },
  {
    id:'/licenciaturas/lcc',
    area: "Área I: Ciencias Físico-Matemáticas y de las Ingenierías",
    carrera: "Ciencia de la Computación",
    seImparte: "Se imparte en: Facultad de Ciencias"
  },
  {
    id:'/licenciaturas/mecatronica',
    area: "Área I: Ciencias Físico-Matemáticas y de las Ingenierías",
    carrera: "Ingeniería Mecatrónica",
    seImparte: "Se imparte en: Facultad de Ingeniería, FES Cuautitlán"
  },
  {
    id:'/licenciaturas/matematicas',
    area: "Área I: Ciencias Físico-Matemáticas y de las Ingenierías",
    carrera: "Matemáticas Aplicadas",
    seImparte: "Se imparte en: Facultad de Ciencias, FES Acatlán"
  },
  {
    id:'/licenciaturas/telecomunicaciones',
    area: "Área I: Ciencias Físico-Matemáticas y de las Ingenierías",
    carrera: "Ingeniería en Telecomunicaciones",
    seImparte: "Se imparte en: Facultad de Ingeniería"
  },
  {
    id:'/licenciaturas/fisica',
    area: "Área I: Ciencias Físico-Matemáticas y de las Ingenierías",
    carrera: "Física",
    seImparte: "Se imparte en: Facultad de Ciencias"
  },

  // Área II: Ciencias Biológicas, Químicas y de la Salud
  {
    id:'/licenciaturas/biologia',
    area: "Área II: Ciencias Biológicas, Químicas y de la Salud",
    carrera: "Biología",
    seImparte: "Se imparte en: Facultad de Ciencias, FES Iztacala, FES Zaragoza"
  },
  {
    id:'/licenciaturas/medicina',
    area: "Área II: Ciencias Biológicas, Químicas y de la Salud",
    carrera: "Médico Cirujano",
    seImparte: "Se imparte en: Facultad de Medicina, FES Iztacala, FES Zaragoza"
  },
  {
    id:'/licenciaturas/qfb',
    area: "Área II: Ciencias Biológicas, Químicas y de la Salud",
    carrera: "Química Farmacéutico Biológica",
    seImparte: "Se imparte en: Facultad de Química, FES Cuautitlán, FES Zaragoza"
  },
  {
    id:'/licenciaturas/psicologia',
    area: "Área II: Ciencias Biológicas, Químicas y de la Salud",
    carrera: "Psicología",
    seImparte: "Se imparte en: Facultad de Psicología, FES Iztacala"
  },
  {
    id:'/licenciaturas/enfermeria',
    area: "Área II: Ciencias Biológicas, Químicas y de la Salud",
    carrera: "Enfermería",
    seImparte: "Se imparte en: FES Iztacala, FES Zaragoza, ENES Unidad León"
  },
  {
    id:'/licenciaturas/odontologia',
    area: "Área II: Ciencias Biológicas, Químicas y de la Salud",
    carrera: "Odontología",
    seImparte: "Se imparte en: Facultad de Odontología, FES Zaragoza"
  },
  {
    id:'/licenciaturas/veterinaria',
    area: "Área II: Ciencias Biológicas, Químicas y de la Salud",
    carrera: "Medicina Veterinaria y Zootecnia",
    seImparte: "Se imparte en: Facultad de Medicina Veterinaria y Zootecnia, FES Cuautitlán"
  },

  // Área III: Ciencias Sociales
  {
    id:'/licenciaturas/comunicacion',
    area: "Área III: Ciencias Sociales",
    carrera: "Comunicación",
    seImparte: "Se imparte en: Facultad de Ciencias Políticas y Sociales, FES Acatlán"
  },
  {
    id:'/licenciaturas/derecho',
    area: "Área III: Ciencias Sociales",
    carrera: "Derecho",
    seImparte: "Se imparte en: Facultad de Derecho, FES Acatlán, FES Aragón"
  },
  {
    id:'/licenciaturas/economia',
    area: "Área III: Ciencias Sociales",
    carrera: "Economía",
    seImparte: "Se imparte en: Facultad de Economía, FES Acatlán"
  },
  {
    id:'/licenciaturas/administracion',
    area: "Área III: Ciencias Sociales",
    carrera: "Administración",
    seImparte: "Se imparte en: Facultad de Contaduría y Administración, FES Acatlán, FES Aragón"
  },
  {
    id:'/licenciaturas/ri',
    area: "Área III: Ciencias Sociales",
    carrera: "Relaciones Internacionales",
    seImparte: "Se imparte en: Facultad de Ciencias Políticas y Sociales, FES Aragón"
  },
  {
    id:'/licenciaturas/sociologia',
    area: "Área III: Ciencias Sociales",
    carrera: "Sociología",
    seImparte: "Se imparte en: Facultad de Ciencias Políticas y Sociales, FES Acatlán"
  },
  {
    id:'/licenciaturas/ts',
    area: "Área III: Ciencias Sociales",
    carrera: "Trabajo Social",
    seImparte: "Se imparte en: Escuela Nacional de Trabajo Social"
  },

  // Área IV: Humanidades y de las Artes
  {
    id:'/licenciaturas/arquitectura',
    area: "Área IV: Humanidades y de las Artes",
    carrera: "Arquitectura",
    seImparte: "Se imparte en: Facultad de Arquitectura, FES Acatlán, FES Aragón"
  },
  {
    id:'/licenciaturas/diseno',
    area: "Área IV: Humanidades y de las Artes",
    carrera: "Diseño y Comunicación Visual",
    seImparte: "Se imparte en: Facultad de Artes y Diseño, FES Cuautitlán"
  },
  {
    id:'/licenciaturas/filosofia',
    area: "Área IV: Humanidades y de las Artes",
    carrera: "Filosofía",
    seImparte: "Se imparte en: Facultad de Filosofía y Letras"
  },
  {
    id:'/licenciaturas/historia',
    area: "Área IV: Humanidades y de las Artes",
    carrera: "Historia del Arte",
    seImparte: "Se imparte en: Facultad de Filosofía y Letras, ENES Unidad Morelia"
  },
  {
    id:'/licenciaturas/musica',
    area: "Área IV: Humanidades y de las Artes",
    carrera: "Música - Canto",
    seImparte: "Se imparte en: Facultad de Música"
  },
  {
    id:'/licenciaturas/letras',
    area: "Área IV: Humanidades y de las Artes",
    carrera: "Letras Hispánicas",
    seImparte: "Se imparte en: Facultad de Filosofía y Letras, FES Acatlán"
  },
  {
    id:'/licenciaturas/teatro',
    area: "Área IV: Humanidades y de las Artes",
    carrera: "Teatro y Actuación",
    seImparte: "Se imparte en: Facultad de Filosofía y Letras (CUT)"
  }
];

licenciaturasFiltradas: LicenciaturaIndividual[] = [];

  constructor() { }

  ngOnInit(): void {
    
    this.licenciaturasFiltradas = [...this.todasLasLicenciaturas];
  }

  
  filtrarPorArea(valorFiltro: string): void {
    if (valorFiltro === 'todas') {
      this.licenciaturasFiltradas = [...this.todasLasLicenciaturas];
    } else {
      this.licenciaturasFiltradas = this.todasLasLicenciaturas.filter(
        licenciatura => licenciatura.area.startsWith(valorFiltro)
      );
    }
  }

}
