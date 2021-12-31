import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { A11yService } from 'src/app/core/services/a11y.service';
import { AzureService } from 'src/app/core/services/azure.service';

declare const ImmersiveReader: {
  launchAsync(
    token: string,
    subdomain: string,
    content: any,
    options: any
  ): Promise<any>;
};

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

  constructor(
    private a11yService: A11yService,
    private fb: FormBuilder,
    private azure: AzureService
  ) {}

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

    this.a11yForm.patchValue({ colorblindFilter: colorFilter });
  }

  toggleDarkMode() {
    this.a11yService.toggleDarkTheme();
    this.darkModeInput.nativeElement.toggleAttribute('checked');
  }

  setColorblindFilter() {
    const filter = this.a11yForm.get('colorblindFilter')?.value;
    this.a11yService.setColorblindFilter(filter);
  }

  launchImmersiveReader() {
    const content = {
      title: document.getElementById('ir-title')?.innerHTML,
      chunks: [
        {
          content: document.getElementById('ir-body')?.innerHTML,
          mimeType: 'text/html',
        },
      ],
    };

    const options = {
      uiLang: 'es-MX',
      uiZIndex: 2000,
    };

    this.azure.getTokenAndSubdomain().subscribe(
      (res) => {
        ImmersiveReader.launchAsync(
          this.azure.token,
          this.azure.subdomain,
          content,
          options
        );
      },
      (err) => console.log(err)
    );
  }
}
