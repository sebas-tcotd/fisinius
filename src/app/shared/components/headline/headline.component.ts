import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { News, NewsElement } from 'src/app/core/interfaces/news.interfaces';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss'],
})
export class HeadlineComponent implements OnInit {
  @Input('headline') headline!: NewsElement;

  constructor() {}

  ngOnInit(): void {}
}
