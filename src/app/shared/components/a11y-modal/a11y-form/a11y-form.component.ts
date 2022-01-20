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
import { NewsService } from 'src/app/core/services/news.service';

/**
 * Variable que contiene las características para iniciar el lector immersivo.
 */
declare const ImmersiveReader: {
  launchAsync(
    token: string,
    subdomain: string,
    content: any,
    options: any
  ): Promise<any>;
};

/**
 * Componente que muestra el formulario de las opciones de accesibilidad.
 */
@Component({
  selector: 'app-a11y-form',
  templateUrl: './a11y-form.component.html',
  styleUrls: ['./a11y-form.component.scss'],
})
export class A11yFormComponent implements OnInit, AfterViewInit {
  /** Atributo que contiene al formulario de accesibilidad */
  a11yForm!: FormGroup;

  /** Contiene el estado del narrador inmmersivo */
  isNarratorDisabled: boolean = true;

  /** Colección de filtros daltónicos */
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

  /** Elemento HTML Input que permite activar el modo oscuro */
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

    this.setNarratorStatus();
  }

  ngAfterViewInit() {
    const theme = this.a11yService.checkCurrentMode();
    const colorFilter = this.a11yService.checkCurrentColorblindFilter();

    if (theme === 'dark') {
      this.darkModeInput.nativeElement.setAttribute('checked', '');
    }

    this.a11yForm.patchValue({ colorblindFilter: colorFilter });
  }

  /**
   * Establece el estado del lector immersivo.
   */
  setNarratorStatus(): boolean {
    this.isNarratorDisabled = this.a11yService.narrationDesactivated;
    return this.isNarratorDisabled;
  }

  /**
   * Alterna el tema de la aplicación.
   */
  toggleDarkMode(): void {
    this.a11yService.toggleDarkTheme();
    this.darkModeInput.nativeElement.toggleAttribute('checked');
  }

  /**
   * Establece el filtro daltónico.
   */
  setColorblindFilter(): void {
    const filter = this.a11yForm.get('colorblindFilter')?.value;
    this.a11yService.setColorblindFilter(filter);
  }

  /**
   * Inicializa el lector inmersivo.
   */
  launchImmersiveReader(): void {
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
      () => {
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
