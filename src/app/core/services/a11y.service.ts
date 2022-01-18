import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class A11yService {
  private _narrationMode: boolean = false;
  constructor() {}

  get narrationMode() {
    return this._narrationMode;
  }

  set narrationMode(mode: boolean) {
    this._narrationMode = mode;
  }

  checkCurrentMode() {
    return localStorage.getItem('theme');
  }

  checkCurrentColorblindFilter() {
    return localStorage.getItem('color-blind-filter');
  }

  toggleDarkTheme() {
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    } else if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
  }

  setColorblindFilter(filter: string) {
    if (filter === 'none') {
      localStorage.setItem('color-blind-filter', filter);
      document.documentElement.removeAttribute('style');
    } else {
      localStorage.setItem('color-blind-filter', filter);
      document.documentElement.style.filter = `url('../../../assets/img/filters.svg#${filter}')`;
    }

    /*if (filter) {
      localStorage.setItem('color-blind-filter', filter);
      document.documentElement.style.filter = `url('../../../assets/img/filters.svg#${filter}')`;
    } else if (filter === 'none') {
      // localStorage.setItem('color-blind-filter', 'none');
      document.documentElement.removeAttribute('style');
    }*/
  }

  toggleImmersiveNarration() {
    this.narrationMode = !this.narrationMode;
    return this.narrationMode;
  }
}
