import { Component } from '@angular/core';
import { A11yService } from './core/services/a11y.service';
import { NewsService } from './core/services/news.service';

/**
 * Componente raíz de la aplicación.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /** Atributo que contiene el estado del sidebar. */
  isSidebarOpen: boolean = false;

  /** Atributo que contiene el estado del panel de accesibilidad. */
  isModalOpen: boolean = false;

  /** Atributo que contiene la palabra de búsqueda de la noticia. */
  searchLetter: string = '';

  constructor(
    private newsService: NewsService,
    private a11yService: A11yService
  ) {
    this.setNarratorStatus();
  }

  /**
   * Establece el estado del lector inmersivo.
   */
  setNarratorStatus(): void {
    const newsRegexIdentifier: RegExp = /news\/[a-z0-9]+/gim;

    this.newsService.getNewsFullUrl().subscribe((url) => {
      if (url?.match(newsRegexIdentifier)) {
        this.a11yService.narrationDesactivated = false;
      } else {
        this.a11yService.narrationDesactivated = true;
      }
    });
  }

  /**
   * Recibe el estado del sidebar.
   * @param event El valor del estado del sidebar.
   */
  receiveToggleStatus(event: boolean): void {
    this.isSidebarOpen = event;
  }

  /**
   * Recibe la palabra de búsqueda de la noticia.
   * @param event La palabra de búsqueda.
   */
  receiveSearchLetter(event: string): void {
    this.searchLetter = event;
  }

  /**
   * Recibe el estado del panel de accesibilidad.
   * @param event El valor del estado del panel de accesibilidad.
   */
  receiveModalStatus(event: boolean): void {
    this.isModalOpen = event;
  }
}
