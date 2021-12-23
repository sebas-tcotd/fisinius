import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class A11yService {
  constructor() {}

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
    if (filter) {
      localStorage.setItem('color-blind-filter', filter);
    } else {
      localStorage.setItem('color-blind-filter', 'none');
    }
    document.documentElement.style.filter = `url('../../../assets/img/filters.svg#${filter}')`;
  }
}
