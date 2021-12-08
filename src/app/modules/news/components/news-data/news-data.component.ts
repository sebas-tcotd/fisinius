import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-data',
  templateUrl: './news-data.component.html',
  styleUrls: [],
})
export class NewsDataComponent implements OnInit {
  @Input() articleImage: string = '';
  @Input() articleAuthors: string[] = [];
  @Input() articleDate: string = '';
  @Input() articleTitle: string = '';

  constructor() {}

  ngOnInit(): void {}
}
