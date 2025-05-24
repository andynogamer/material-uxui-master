import { Component, HostListener } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommunicationService } from '../shared/communication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
        trigger('rotate', [
          state('default', style({ transform: 'rotate(0)' })),
          state('rotated', style({ transform: 'rotate(90deg)' })),
          transition('default => rotated', animate('300ms ease-in-out')),
          transition('rotated => default', animate('300ms ease-in-out'))
        ])
  ]
})
export class HeaderComponent {



  isMobile : boolean = false;
  

  isMenuOpen: boolean = false;

  currentState  = ['default', 'default'];
  

   ngOnInit() {
    this.checkScreenSize(); 
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize(); 
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 800;
    
  }

triggerSidebarToggle() {
    if (this.isMobile) {
      this.communicationService.toggleSidebar();
    }
  }
  

  onMenuOpened(): void {
    this.isMenuOpen = true;
    this.currentState[0]= 'rotated'
    console.log('Evento: Menú abierto, isMenuOpen (local):', this.isMenuOpen);
  }

  onMenuClosed(): void {
    this.isMenuOpen = false;
    this.currentState[0]= 'default'
    console.log('Evento: Menú cerrado, isMenuOpen (local):', this.isMenuOpen);
  }

  onMenuOpened1(): void {
    this.isMenuOpen = true;
    this.currentState[1]= 'rotated'
    console.log('Evento: Menú abierto, isMenuOpen (local):', this.isMenuOpen);
  }

  onMenuClosed1(): void {
    this.isMenuOpen = false;
    this.currentState[1]= 'default'
    console.log('Evento: Menú cerrado, isMenuOpen (local):', this.isMenuOpen);
  }

  handleBtnAction(): void {
      window.open('https://estadistica.unam.mx/', '_blank')
    }
  constructor(private communicationService: CommunicationService) { }

  


}
