import { Component, Input } from '@angular/core';
import { NewsElement } from 'src/app/core/interfaces/news.interfaces';

/**
 * Componente que muestra el titular de una noticia.
 */
@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: [],
})
export class HeadlineComponent {
  /** Atributo que recibe la data del titular. */
  @Input() headline!: NewsElement;
}
