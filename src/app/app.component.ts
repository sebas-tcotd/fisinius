import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isSidebarOpen: boolean = false;
  isModalOpen: boolean = false;
  searchLetter: string = '';

  receiveToggleStatus(event: boolean) {
    this.isSidebarOpen = event;
  }
  receiveSearchLetter(event: string) {
    this.searchLetter = event;
  }
  receiveModalStatus(event: boolean) {
    this.isModalOpen = event;
  }
}
