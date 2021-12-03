import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() closeSignEmitter: EventEmitter<boolean> = new EventEmitter();
  @Input() isSidebarOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  /**
   * Envía la señal de cierre del sidebar (isSidebarOpen: false)
   */
  closeSidebar() {
    this.isSidebarOpen = false;
    this.closeSignEmitter.emit(this.isSidebarOpen);
  }
}
