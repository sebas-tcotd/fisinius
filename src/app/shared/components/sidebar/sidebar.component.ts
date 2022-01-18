import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [],
})
export class SidebarComponent {
  @Output() closeSignEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output() closeModalEmitter: EventEmitter<boolean> = new EventEmitter();
  @Input() isSidebarOpen: boolean = false;
  @Input() isModalActive!: boolean;

  constructor() {}

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
