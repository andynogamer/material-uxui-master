import {Component, ViewChild, OnDestroy, OnInit} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Subscription } from 'rxjs'; // Import Subscription
import { CommunicationService } from '../shared/communication.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
        trigger('rotate', [
          state('default', style({ transform: 'rotate(0)' })),
          state('rotated', style({ transform: 'rotate(90deg)' })),
          transition('default => rotated', animate('300ms ease-in-out')),
          transition('rotated => default', animate('300ms ease-in-out'))
        ])
  ]
})
export class SidebarComponent implements OnInit, OnDestroy { // Implement OnInit and OnDestroy
  @ViewChild('drawer') drawer!: MatDrawer; // Get a reference to the MatDrawer
  private sidebarToggleSubscription!: Subscription; // To store the subscription

  isMobile : boolean = false;
  // sidebarOpen : boolean = false; // This state will now be managed by the MatDrawer itself

  isMenuOpen: boolean = false;
  currentState  = ['default', 'default'];

  constructor(private communicationService: CommunicationService) {} // Inject the service

  ngOnInit() {
    this.onResize(); // Verificar al cargar la página
    this.sidebarToggleSubscription = this.communicationService.sidebarToggle$.subscribe(() => {
      if (this.drawer) {
        this.drawer.toggle();
      }
    });
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.sidebarToggleSubscription) {
      this.sidebarToggleSubscription.unsubscribe();
    }
  }

  onResize() {
    this.isMobile = window.innerWidth < 768; //
  }

  // toggleSidebar() { // This method is no longer directly called by a button in this component's template for opening
  //   this.sidebarOpen = !this.sidebarOpen;
  // }

  closeSidebar() {
    if (this.drawer) {
      this.drawer.close();
    }
    // this.sidebarOpen = false;
  }

 onMenuOpened(): void {
    this.isMenuOpen = true;
    this.currentState[0]= 'rotated' //
    console.log('Evento: Menú abierto, isMenuOpen (local):', this.isMenuOpen); //
  }

  onMenuClosed(): void {
    this.isMenuOpen = false;
    this.currentState[0]= 'default' //
    console.log('Evento: Menú cerrado, isMenuOpen (local):', this.isMenuOpen); //
  }

  onMenuOpened1(): void {
    this.isMenuOpen = true;
    this.currentState[1]= 'rotated' //
    console.log('Evento: Menú abierto, isMenuOpen (local):', this.isMenuOpen); //
  }

  onMenuClosed1(): void {
    this.isMenuOpen = false;
    this.currentState[1]= 'default' //
    console.log('Evento: Menú cerrado, isMenuOpen (local):', this.isMenuOpen); //
  }
}