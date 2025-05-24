import { Component } from '@angular/core';

@Component({
  selector: 'app-facultades-page',
  templateUrl: './facultades-page.component.html',
  styleUrls: ['./facultades-page.component.css']
})
export class FacultadesPageComponent {

   area1: string[] = [
  "Facultad de Ciencias",
  "Facultad de Ingeniería",
  "Facultad de Química",
  "Facultad de Estudios Superiores Acatlán",
  "Facultad de Estudios Superiores Aragón",
  "Facultad de Estudios Superiores Cuautitlán"
];

// Área II: Ciencias Biológicas, Químicas y de la Salud
 area2: string[] = [
  "Facultad de Ciencias",
  "Facultad de Medicina",
  "Facultad de Medicina Veterinaria y Zootecnia",
  "Facultad de Odontología",
  "Facultad de Psicología",
  "Facultad de Química",
  "Escuela Nacional de Estudios Superiores Unidad León",
  "Escuela Nacional de Estudios Superiores Unidad Morelia",
  "Escuela Nacional de Estudios Superiores Unidad Juriquilla",
  "Facultad de Estudios Superiores Cuautitlán",
  "Facultad de Estudios Superiores Iztacala",
  "Facultad de Estudios Superiores Zaragoza"
];

// Área III: Ciencias Sociales
 area3: string[] = [
  "Facultad de Ciencias Políticas y Sociales",
  "Facultad de Contaduría y Administración",
  "Facultad de Derecho",
  "Facultad de Economía",
  "Escuela Nacional de Trabajo Social",
  "Facultad de Estudios Superiores Acatlán",
  "Facultad de Estudios Superiores Aragón"
];

// Área IV: Humanidades y de las Artes
 area4: string[] = [
  "Facultad de Arquitectura",
  "Facultad de Artes y Diseño",
  "Facultad de Filosofía y Letras",
  "Facultad de Música",
  "Escuela Nacional de Estudios Superiores Unidad Morelia",
  "Escuela Nacional de Estudios Superiores Unidad Juriquilla",
  "Facultad de Estudios Superiores Acatlán",
  "Facultad de Estudios Superiores Aragón",
  "Facultad de Estudios Superiores Cuautitlán"
];

// Escuelas Nacionales (Bachillerato y otras)
 escuelasNacionales: string[] = [
  "Escuela Nacional de Lenguas, Lingüística y Traducción (ENALLT)",
  "Escuela Nacional de Estudios Superiores, Unidad León",
  "Escuela Nacional de Estudios Superiores, Unidad Juriquilla",
  "Escuela Nacional de Estudios Superiores, Unidad Mérida",
  "Escuela Nacional de Estudios Superiores, Unidad Morelia",
  "Escuela Nacional Preparatoria (ENP)",
  "Colegio de Ciencias y Humanidades (CCH)"
];


}
