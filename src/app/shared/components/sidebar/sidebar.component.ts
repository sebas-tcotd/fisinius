import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [],
})
export class SidebarComponent implements OnInit {
  @Output() closeSignEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output() closeModalEmitter: EventEmitter<boolean> = new EventEmitter();
  @Input() isSidebarOpen: boolean = false;
  @Input() isModalActive!: boolean;

  constructor() {}

  ngOnInit(): void {}

  toggleA11yModal() {
    this.isModalActive = !this.isModalActive;
    this.closeModalEmitter.emit(this.isModalActive);

    this.closeSidebar();
  }

  /**
   * Envía la señal de cierre del sidebar (isSidebarOpen: false)
   */
  closeSidebar() {
    this.isSidebarOpen = false;
    this.closeSignEmitter.emit(this.isSidebarOpen);
  }
}
