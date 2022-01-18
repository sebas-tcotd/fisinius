import { Component } from '@angular/core';
import { A11yService } from './core/services/a11y.service';
import { NewsService } from './core/services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isSidebarOpen: boolean = false;
  isModalOpen: boolean = false;
  searchLetter: string = '';

  constructor(
    private newsService: NewsService,
    private a11yService: A11yService
  ) {
    this.setNarratorStatus();
  }

  setNarratorStatus() {
    const newsRegexIdentifier: RegExp = /news\/[a-z0-9]+/gim;

    this.newsService.getNewsFullUrl().subscribe((url) => {
      if (url?.match(newsRegexIdentifier)) {
        this.a11yService.narrationDesactivated = false;
      } else {
        this.a11yService.narrationDesactivated = true;
      }
    });
  }

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
