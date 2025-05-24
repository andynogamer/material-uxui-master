import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlumnosPageComponent } from './alumnos-page/alumnos-page.component';
import { AcademicosPageComponent } from './academicos-page/academicos-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FacultadesPageComponent } from './facultades-page/facultades-page.component';
import { LicenciaturasPageComponent } from './licenciaturas-page/licenciaturas-page.component';
import { ActuariaComponent } from './licenciaturas-individuales/actuaria/actuaria.component';
import { IngenieriaCivilComponent } from './licenciaturas-individuales/ingenieria-civil/ingenieria-civil.component';
import { LccComponent } from './licenciaturas-individuales/lcc/lcc.component';
import { MecatronicaComponent } from './licenciaturas-individuales/mecatronica/mecatronica.component';
import { MatematicasComponent } from './licenciaturas-individuales/matematicas/matematicas.component';
import { TelecomunicacionesComponent } from './licenciaturas-individuales/telecomunicaciones/telecomunicaciones.component';
import { FisicaComponent } from './licenciaturas-individuales/fisica/fisica.component';
import { BiologiaComponent } from './licenciaturas-individuales/biologia/biologia.component';
import { MedicinaComponent } from './licenciaturas-individuales/medicina/medicina.component';
import { QfbComponent } from './licenciaturas-individuales/qfb/qfb.component';
import { PsicologiaComponent } from './licenciaturas-individuales/psicologia/psicologia.component';
import { EnfermeriaComponent } from './licenciaturas-individuales/enfermeria/enfermeria.component';
import { OdontologiaComponent } from './licenciaturas-individuales/odontologia/odontologia.component';
import { VeterinariaComponent } from './licenciaturas-individuales/veterinaria/veterinaria.component';
import { ComunicacionComponent } from './licenciaturas-individuales/comunicacion/comunicacion.component';
import { DerechoComponent } from './licenciaturas-individuales/derecho/derecho.component';
import { EconomiaComponent } from './licenciaturas-individuales/economia/economia.component';
import { AdministracionComponent } from './licenciaturas-individuales/administracion/administracion.component';
import { RiComponent } from './licenciaturas-individuales/ri/ri.component';
import { SociologiaComponent } from './licenciaturas-individuales/sociologia/sociologia.component';
import { TsComponent } from './licenciaturas-individuales/ts/ts.component';
import { ArquitecturaComponent } from './licenciaturas-individuales/arquitectura/arquitectura.component';
import { DisenoComponent } from './licenciaturas-individuales/diseno/diseno.component';
import { FilosofiaComponent } from './licenciaturas-individuales/filosofia/filosofia.component';
import { HistoriaComponent } from './licenciaturas-individuales/historia/historia.component';
import { MusicaComponent } from './licenciaturas-individuales/musica/musica.component';
import { LetrasComponent } from './licenciaturas-individuales/letras/letras.component';
import { TeatroComponent } from './licenciaturas-individuales/teatro/teatro.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'alumnos', component:AlumnosPageComponent},
  {path: 'academicos', component:AcademicosPageComponent},
  {path: 'sidebar-dev', component:SidebarComponent},
  {path: 'facultades', component:FacultadesPageComponent},
  {path: 'licenciaturas', component:LicenciaturasPageComponent},
  {path: 'licenciaturas/actuaria', component:ActuariaComponent},
  {path: 'licenciaturas/ingenieria-civil', component:IngenieriaCivilComponent},
  {path: 'licenciaturas/lcc',component:LccComponent},
  { path: 'licenciaturas/mecatronica', component: MecatronicaComponent },
  { path: 'licenciaturas/matematicas', component: MatematicasComponent },
  { path: 'licenciaturas/telecomunicaciones', component: TelecomunicacionesComponent },
  { path: 'licenciaturas/fisica', component: FisicaComponent },
  { path: 'licenciaturas/biologia', component: BiologiaComponent },
  { path: 'licenciaturas/medicina', component: MedicinaComponent },
  { path: 'licenciaturas/qfb', component: QfbComponent },
  { path: 'licenciaturas/psicologia', component: PsicologiaComponent },
  { path: 'licenciaturas/enfermeria', component: EnfermeriaComponent },
  { path: 'licenciaturas/odontologia', component: OdontologiaComponent },
  { path: 'licenciaturas/veterinaria', component: VeterinariaComponent },
  { path: 'licenciaturas/comunicacion', component: ComunicacionComponent },
  { path: 'licenciaturas/derecho', component: DerechoComponent },
  { path: 'licenciaturas/economia', component: EconomiaComponent },
  { path: 'licenciaturas/administracion', component: AdministracionComponent },
  { path: 'licenciaturas/ri', component: RiComponent },
  { path: 'licenciaturas/sociologia', component: SociologiaComponent },
  { path: 'licenciaturas/ts', component: TsComponent },
  { path: 'licenciaturas/arquitectura', component: ArquitecturaComponent },
  { path: 'licenciaturas/diseno', component: DisenoComponent },
  { path: 'licenciaturas/filosofia', component: FilosofiaComponent },
  { path: 'licenciaturas/historia', component: HistoriaComponent },
  { path: 'licenciaturas/musica', component: MusicaComponent },
  { path: 'licenciaturas/letras', component: LetrasComponent },
  { path: 'licenciaturas/teatro', component: TeatroComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
