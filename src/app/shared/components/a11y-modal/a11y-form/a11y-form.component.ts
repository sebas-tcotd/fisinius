import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { A11yService } from 'src/app/core/services/a11y.service';

@Component({
  selector: 'app-a11y-form',
  templateUrl: './a11y-form.component.html',
  styleUrls: ['./a11y-form.component.scss'],
})
export class A11yFormComponent implements OnInit, AfterViewInit {
  @ViewChild('darkMode') darkModeInput!: ElementRef;
  constructor(private a11yService: A11yService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const theme = this.a11yService.checkCurrentMode();
    console.log(theme);

    if (theme === 'dark') {
      this.darkModeInput.nativeElement.setAttribute('checked', '');
    }
  }

  toggleDarkMode() {
    this.a11yService.toggleDarkTheme();
    this.darkModeInput.nativeElement.toggleAttribute('checked');
  }
}
