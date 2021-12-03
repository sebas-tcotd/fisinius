import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  prevScrollPosition: number = NaN;

  constructor() {}

  ngOnInit(): void {}
}
