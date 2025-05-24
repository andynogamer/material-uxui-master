// src/app/theme-toggle/theme-toggle.component.ts
import { Component } from '@angular/core';
import { ThemeService } from '../theme.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css']
})
export class ThemeToggleComponent {
  constructor(public themeService: ThemeService) {} // Inyecta como público para usar en la plantilla

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}