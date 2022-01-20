import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsService } from 'src/app/core/services/news.service';
import { NewsElement } from '../../../../core/interfaces/news.interfaces';

/**
 * Componente que contiene las noticias resultado de una búsqueda.
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [],
})
export class SearchComponent implements OnInit, OnDestroy {
  /** Atributo que determina si la página está cargando. */
  isPageLoading: boolean = true;

  /** Arreglo que contienen los titulares resultado de la búsqueda. */
  headlines: NewsElement[] = [];

  /** Suscripción que está al tanto de la palabra de búsqueda. */
  keywordSubscription!: Subscription;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.waitForNews();
  }

  ngOnDestroy() {
    this.keywordSubscription.unsubscribe();
  }

  /**
   * Dependiendo de cuánto tiempo pase, se hará la carga para la búsqueda de las noticias.
   */
  waitForNews(): void {
    this.isPageLoading = true;
    this.getResultsFromSearch();

    setTimeout(() => {
      this.isPageLoading = false;
    }, 4000);
  }

  /**
   * Obtiene los resultados realizados a la API de búsqueda de noticias.
   */
  getResultsFromSearch(): void {
    this.keywordSubscription = this.newsService.searchKeyword$.subscribe(
      (res) => {
        console.log(res);

        this.isPageLoading = false;
        this.headlines = res.news;
      }
    );
  }
}
