import {Component, ViewChild, OnDestroy, OnInit} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Subscription } from 'rxjs';
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
export class SidebarComponent implements OnInit, OnDestroy { 
  @ViewChild('drawer') drawer!: MatDrawer; 
  private sidebarToggleSubscription!: Subscription; 

  isMobile : boolean = false;
  

  isMenuOpen: boolean = false;
  currentState  = ['default', 'default'];

  constructor(private communicationService: CommunicationService) {} 

  ngOnInit() {
    this.onResize(); 
    this.sidebarToggleSubscription = this.communicationService.sidebarToggle$.subscribe(() => {
      if (this.drawer) {
        this.drawer.toggle();
      }
    });
  }

  ngOnDestroy() {
    if (this.sidebarToggleSubscription) {
      this.sidebarToggleSubscription.unsubscribe();
    }
  }

  onResize() {
    this.isMobile = window.innerWidth < 768; //
  }

  

  closeSidebar() {
    if (this.drawer) {
      this.drawer.close();
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
}