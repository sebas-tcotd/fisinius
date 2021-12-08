import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class A11yService {
  constructor() {}

  checkCurrentMode() {
    return localStorage.getItem('theme');
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
}
