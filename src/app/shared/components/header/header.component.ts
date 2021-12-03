import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isSidebarOpen: boolean = false;
  @Output() openSignEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.isSidebarOpen = true;
    this.openSignEmitter.emit(this.isSidebarOpen);
  }
}
