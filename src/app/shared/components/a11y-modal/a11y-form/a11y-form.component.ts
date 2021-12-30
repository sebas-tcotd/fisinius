import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { A11yService } from 'src/app/core/services/a11y.service';

@Component({
  selector: 'app-a11y-form',
  templateUrl: './a11y-form.component.html',
  styleUrls: ['./a11y-form.component.scss'],
})
export class A11yFormComponent implements OnInit, AfterViewInit {
  a11yForm!: FormGroup;

  colorblindFilters = [
    { value: 'protanopia', name: 'Protanopía' },
    { value: 'deuteranopia', name: 'Deuteranopía' },
    { value: 'tritanopia', name: 'Tritanopía' },
    { value: 'achromatopsia', name: 'Acromatopcia' },
    { value: 'protanomaly', name: 'Protanomalía' },
    { value: 'deuteranomaly', name: 'Deuteranomalía' },
    { value: 'tritanomaly', name: 'Tritanomalía' },
    { value: 'achromatomaly', name: 'Acromatomalía' },
  ];

  @ViewChild('darkMode') darkModeInput!: ElementRef;

  constructor(private a11yService: A11yService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.a11yForm = this.fb.group({
      colorblindFilter: [null],
    });
  }

  ngAfterViewInit() {
    const theme = this.a11yService.checkCurrentMode();
    const colorFilter = this.a11yService.checkCurrentColorblindFilter();

    if (theme === 'dark') {
      this.darkModeInput.nativeElement.setAttribute('checked', '');
    }

    this.a11yForm.setValue({ colorblindFilter: colorFilter });
  }

  toggleDarkMode() {
    this.a11yService.toggleDarkTheme();
    this.darkModeInput.nativeElement.toggleAttribute('checked');
  }

  setColorblindFilter() {
    const filter = this.a11yForm.get('colorblindFilter')?.value;
    this.a11yService.setColorblindFilter(filter);
  }

  toggleImmersiveNarration() {
    this.a11yService.toggleImmersiveNarration();
  }
}
