import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isSidebarOpen: boolean = false;

  receiveToggleStatus(event: boolean) {
    this.isSidebarOpen = event;
  }
}
