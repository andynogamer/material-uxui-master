import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private sidebarToggleSource = new Subject<void>();

  sidebarToggle$ = this.sidebarToggleSource.asObservable();

  toggleSidebar() {
    this.sidebarToggleSource.next();
  }
}