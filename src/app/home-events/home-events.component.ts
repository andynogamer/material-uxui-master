import { Component, OnInit, HostListener } from '@angular/core';

// Assuming HomeIndividualEventComponent is a class with these public properties:
// constructor(public dia: string, public mes: string, public titulo: string, public hora?: string) {}
// If it's not, you might need to adjust how 'events' are defined or accessed.
// For this example, I'll assume its structure based on your instantiation.
// It's good practice to define an interface or class for your data model.
export class HomeIndividualEventModel { // Using a model name for clarity
  constructor(
    public dia: string,
    public mes: string,
    public titulo: string,
    public hora?: string
  ) {}
}

@Component({
  selector: 'app-home-events',
  templateUrl: './home-events.component.html',
  styleUrls: ['./home-events.component.css']
})
export class HomeEventsComponent implements OnInit {
  // Using the model for the events array
  events: HomeIndividualEventModel[] = [
    new HomeIndividualEventModel('24','MAY','Congreso Internacional', '6:00 pm'),
    new HomeIndividualEventModel('25','MAY','Congreso Nacional', '6:00 pm'),
    new HomeIndividualEventModel('26','MAY','Congreso Municipal', '2:00 pm'),
    new HomeIndividualEventModel('27','MAY','Junta Directiva', '12:00 pm'),
    new HomeIndividualEventModel('28','MAY','Partido Pumas', '1:00 pm'),
    new HomeIndividualEventModel('29','MAY','Orquesta de Nuestra Universidad', '2:00 pm'),
    new HomeIndividualEventModel('03','JUN','Taller de Fotografía Urbana', '10:00 am'),
    new HomeIndividualEventModel('05','JUN','Noche de Cine Clásico al Aire Libre', '8:30 pm'),
    new HomeIndividualEventModel('10','JUN','Presentación Libro: "Crónicas del Desierto"', '7:00 pm'),
    new HomeIndividualEventModel('12','JUL','Festival Gastronómico "Sabores del Norte"', '1:00 pm'),
    new HomeIndividualEventModel('15','JUL','Concierto Acústico: Nuevos Talentos', '9:00 pm'),
    new HomeIndividualEventModel('20','JUL','Exposición de Arte Contemporáneo Local', '4:00 pm'),
    new HomeIndividualEventModel('01','AGO','Seminario de Innovación Tecnológica', '9:30 am'),
    new HomeIndividualEventModel('07','AGO','Charla: "El Futuro de la Inteligencia Artificial"', '6:00 pm'),
    new HomeIndividualEventModel('22','SEP','Encuentro de Poesía Joven', '7:30 pm'),
  ];

  displayedEvents: HomeIndividualEventModel[] = [];
  currentIndex = 0;
  itemsPerPage = 4; // Default for desktop, will be updated

  ngOnInit(): void {
    this.updateItemsPerPageBasedOnScreenWidth();
    this.updateDisplayedEvents();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event): void {
    const oldItemsPerPage = this.itemsPerPage;
    this.updateItemsPerPageBasedOnScreenWidth();

    if (oldItemsPerPage !== this.itemsPerPage) {
      // Adjust current index to keep it valid and provide a smooth experience
      // This tries to keep the current set of items in view, or resets if not possible
      this.currentIndex = Math.floor(this.currentIndex / oldItemsPerPage) * this.itemsPerPage;
      
      if (this.currentIndex + this.itemsPerPage > this.events.length) {
        this.currentIndex = Math.max(0, this.events.length - this.itemsPerPage);
      }
       if (this.events.length <= this.itemsPerPage) {
        this.currentIndex = 0;
      }


      this.updateDisplayedEvents();
    }
  }

  updateItemsPerPageBasedOnScreenWidth(): void {
    const width = window.innerWidth;
    if (width < 480) { // Mobile
      this.itemsPerPage = 1;
    } else if (width < 768) { // Small tablets
      this.itemsPerPage = 2;
    } else if (width < 992) { // Tablets and small desktops
      this.itemsPerPage = 3;
    } else { // Larger desktops
      this.itemsPerPage = 4;
    }
  }

  updateDisplayedEvents(): void {
    if (!this.events || this.events.length === 0) {
      this.displayedEvents = [];
      return;
    }
    const endIndex = this.currentIndex + this.itemsPerPage;
    this.displayedEvents = this.events.slice(this.currentIndex, endIndex);
  }

  previousCard(): void {
    if (this.canGoPrevious) {
      this.currentIndex -= this.itemsPerPage; // Go back a full page
      if(this.currentIndex < 0) this.currentIndex = 0; // Ensure not negative
      this.updateDisplayedEvents();
    }
  }

  nextCard(): void {
    if (this.canGoNext) {
      this.currentIndex += this.itemsPerPage; // Go forward a full page
      this.updateDisplayedEvents();
    }
  }

  get canGoPrevious(): boolean {
    return this.currentIndex > 0;
  }

  get canGoNext(): boolean {
    // Check if there are more items beyond the current view
    return this.currentIndex + this.itemsPerPage < this.events.length;
  }
}