import { Component, Input } from '@angular/core';
import { NewsElement } from 'src/app/core/interfaces/news.interfaces';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: [],
})
export class HeadlineComponent {
  @Input() headline!: NewsElement;

  constructor() {}
}
