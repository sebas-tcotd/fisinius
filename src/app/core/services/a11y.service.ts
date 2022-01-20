import { Injectable } from '@angular/core';

/**
 * Servicio que otorga características de accesibilidad.
 */
@Injectable({
  providedIn: 'root',
})
export class A11yService {
  /** @ignore */
  private _narrationMode: boolean = false;

  /** @ignore */
  private _narrationDesactivated: boolean = false;

  /**
   * Retorna el modo de la narración.
   */
  get narrationMode() {
    return this._narrationMode;
  }

  /**
   * Establece el modo de la narración.
   */
  set narrationMode(mode: boolean) {
    this._narrationMode = mode;
  }

  /**
   * Retorna si la narración está desactivada.
   */
  get narrationDesactivated() {
    return this._narrationDesactivated;
  }

  /**
   * Establece el estado de la narración.
   */
  set narrationDesactivated(status: boolean) {
    this._narrationDesactivated = status;
  }

  /**
   * Chequea el valor de tema seleccionado por el usuario.
   * @returns El valor de la apariencia de la aplicación (claro u oscuro).
   */
  checkCurrentMode(): string | null {
    return localStorage.getItem('theme');
  }

  /**
   * Chequea si el valor del filtro daltónico está almacenado de manera local.
   * @returns El valor del filtro daltónico seleccionado.
   */
  checkCurrentColorblindFilter(): string | null {
    return localStorage.getItem('color-blind-filter');
  }

  /**
   * Alterna el tema de la aplicación.
   */
  toggleDarkTheme(): void {
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    } else if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
  }

  /**
   * Establece el filtro daltónico.
   * @param filter El valor del filtro daltónico.
   */
  setColorblindFilter(filter: string): void {
    if (filter === 'none') {
      localStorage.setItem('color-blind-filter', filter);
      document.documentElement.removeAttribute('style');
    } else {
      localStorage.setItem('color-blind-filter', filter);
      document.documentElement.style.filter = `url('../../../assets/img/filters.svg#${filter}')`;
    }
  }

  /**
   * Activa el estado de la narración inmersiva.
   * @returns El estado de la narración.
   */
  toggleImmersiveNarration(): boolean {
    this.narrationMode = !this.narrationMode;
    return this.narrationMode;
  }
}
