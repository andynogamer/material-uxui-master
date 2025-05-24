import { Component } from '@angular/core';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent {
area : string = 'Área I: C. Físico-Matemáticas';
  carrera : string = 'Actuaría';
  descripcion : string = 'Forma profesionales capaces de analizar y modelar fenómenos aleatorios y financieros, aplicando métodos matemáticos y estadísticos para evaluar y administrar riesgos en seguros, pensiones, finanzas y demografía.'
  sedes: string ='Facultad de Ciencias, FES Acatlán';
  url : string = 'https://oferta.unam.mx/actuaria.html';

}
