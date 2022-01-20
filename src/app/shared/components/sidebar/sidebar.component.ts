import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Componente que muestra el sidebar (solo en resoluciones mobile).
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [],
})
export class SidebarComponent {
  /** Atributo que emite una señal de cierre del sidebar. */
  @Output() closeSignEmitter: EventEmitter<boolean> = new EventEmitter();

  /** Atributo que emite la señal de cierre del panel de accesibilidad. */
  @Output() closeModalEmitter: EventEmitter<boolean> = new EventEmitter();

  /** Atributo que recibe el estado del sidebar. */
  @Input() isSidebarOpen: boolean = false;

  /** Atributo que recibe el estado del panel de accesibilidad. */
  @Input() isModalActive!: boolean;

  /**
   * Alterna el estado del panel de accesibilidad.
   */
  toggleA11yModal(): void {
    this.isModalActive = !this.isModalActive;
    this.closeModalEmitter.emit(this.isModalActive);

    this.closeSidebar();
  }

  /**
   * Envía la señal de cierre del sidebar (isSidebarOpen: false).
   */
  closeSidebar(): void {
    this.isSidebarOpen = false;
    this.closeSignEmitter.emit(this.isSidebarOpen);
  }
}
