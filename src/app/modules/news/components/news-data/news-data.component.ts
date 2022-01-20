import { Component, Input } from '@angular/core';

/**
 * Componente que muestra la metadata de la noticia.
 */
@Component({
  selector: 'app-news-data',
  templateUrl: './news-data.component.html',
  styleUrls: [],
})
export class NewsDataComponent {
  /** Atributo que recibe la url de la imagen del artículo. */
  @Input() articleImage: string = '';

  /** Atributo que recibe quién es el autor de la noticia. */
  @Input() articleAuthors: string[] = [];

  /** Atributo que recibe cuándo fue creada la noticia. */
  @Input() articleDate: string = '';

  /** Atributo que recibe el título de la noticia. */
  @Input() articleTitle: string = '';
}
