import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-data',
  templateUrl: './news-data.component.html',
  styleUrls: [],
})
export class NewsDataComponent {
  @Input() articleImage: string = '';
  @Input() articleAuthors: string[] = [];
  @Input() articleDate: string = '';
  @Input() articleTitle: string = '';

  constructor() {}
}
