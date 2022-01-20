import { Component, Input } from '@angular/core';

/**
 * Componente que muestra el cuerpo de la noticia y su url original.
 */
@Component({
  selector: 'app-news-body',
  templateUrl: './news-body.component.html',
  styleUrls: [],
})
export class NewsBodyComponent {
  /** Atributo que recibe la url de la noticia original. */
  @Input() articleSource: string = '';
  /** Atributo que recibe el cuerpo de la noticia. */
  @Input() articleBody: string = '';
}
