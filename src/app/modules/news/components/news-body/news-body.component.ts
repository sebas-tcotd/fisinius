import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-body',
  templateUrl: './news-body.component.html',
  styleUrls: ['./news-body.component.scss'],
})
export class NewsBodyComponent implements OnInit {
  @Input() articleSource: string = '';
  @Input() articleBody: string = '';

  constructor() {}

  ngOnInit(): void {}
}
