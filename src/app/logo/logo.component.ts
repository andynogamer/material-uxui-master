import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {
logoModoClaroUrl: string = 'https://placehold.co/150x50/FFFFFF/000000?text=UNAM';
  altText: string = 'UNAM_logo';

  // --- Configuración para el Modo Oscuro ---
  // ¡Personaliza estos colores hexadecimales para tu logo en modo oscuro!
  // Ejemplo 1: Fondo negro (000000), Texto blanco (FFFFFF)
  colorFondoModoOscuro: string = '0f2947';
  colorTextoModoOscuro: string = 'a38521';

 
   colorFondoModoClaro: string = '000000';
   colorTextoModoClaro: string = 'FFFFFF';

  
   
  logoModoOscuroUrl: string = `https://placehold.co/150x50/${this.colorFondoModoOscuro}/${this.colorTextoModoOscuro}?text=UNAM`;

  /**
   * Constructor del componente.
   * @param themeService - Servicio para gestionar los temas de la aplicación.
   * Se declara público para poder acceder a 'isDarkMode()' desde la plantilla.
   */
  constructor(public themeService: ThemeService) { }
}
