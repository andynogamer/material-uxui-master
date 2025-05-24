import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { HomeEventsComponent } from './home-events/home-events.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { AlumnosPageComponent } from './alumnos-page/alumnos-page.component';
import { AcademicosPageComponent } from './academicos-page/academicos-page.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FacultadesPageComponent } from './facultades-page/facultades-page.component';
import { LicenciaturasPageComponent } from './licenciaturas-page/licenciaturas-page.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
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
import { HomeNewsSectionComponent } from './home-news-section/home-news-section.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { LogoComponent } from './logo/logo.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeHeroComponent,
    HomeEventsComponent,
    AlumnosPageComponent,
    AcademicosPageComponent,
    SidebarComponent,
    FacultadesPageComponent,
    LicenciaturasPageComponent,
    ActuariaComponent,
    IngenieriaCivilComponent,
    LccComponent,
    MecatronicaComponent,
    MatematicasComponent,
    TelecomunicacionesComponent,
    FisicaComponent,
    BiologiaComponent,
    MedicinaComponent,
    QfbComponent,
    PsicologiaComponent,
    EnfermeriaComponent,
    OdontologiaComponent,
    VeterinariaComponent,
    ComunicacionComponent,
    DerechoComponent,
    EconomiaComponent,
    AdministracionComponent,
    RiComponent,
    SociologiaComponent,
    TsComponent,
    ArquitecturaComponent,
    DisenoComponent,
    FilosofiaComponent,
    HistoriaComponent,
    MusicaComponent,
    LetrasComponent,
    TeatroComponent,
    HomeNewsSectionComponent,
    ThemeToggleComponent,
    LogoComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonToggleModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
