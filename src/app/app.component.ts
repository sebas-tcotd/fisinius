import { Component } from '@angular/core';
import { SearchComponent } from './modules/search/pages/search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isSidebarOpen: boolean = false;
  searchLetter: string = '';

  receiveToggleStatus(event: boolean) {
    this.isSidebarOpen = event;
  }
  receiveSearchLetter(event: string) {
    console.log(event);

    this.searchLetter = event;
  }
}
