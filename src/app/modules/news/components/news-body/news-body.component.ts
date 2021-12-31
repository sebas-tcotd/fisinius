import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-body',
  templateUrl: './news-body.component.html',
  styleUrls: [],
})
export class NewsBodyComponent {
  @Input() articleSource: string = '';
  @Input() articleBody: string = '';

  constructor() {}
}
