import { Component } from '@angular/core';

@Component({
  selector: 'app-actuaria',
  templateUrl: './actuaria.component.html',
  styleUrls: ['./actuaria.component.css']
})
export class ActuariaComponent {
  constructor(){

  }
  area : string = 'Área I: C. Físico-Matemáticas';
  carrera : string = 'Actuaría';
  descripcion : string = 'Forma profesionales capaces de analizar y modelar fenómenos aleatorios y financieros, aplicando métodos matemáticos y estadísticos para evaluar y administrar riesgos en seguros, pensiones, finanzas y demografía.'
  sedes: string ='Facultad de Ciencias, FES Acatlán';
  url : string = 'https://oferta.unam.mx/actuaria.html';

}
