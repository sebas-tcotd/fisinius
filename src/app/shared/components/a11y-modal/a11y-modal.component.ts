import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
  EventEmitter,
} from '@angular/core';

/**
 * Componente que contiene el formulario de accesibilidad.
 */
@Component({
  selector: 'app-a11y-modal',
  templateUrl: './a11y-modal.component.html',
  styleUrls: [],
})
export class A11yModalComponent implements OnChanges {
  /** Atributo que recibe es estado del panel de accesibilidad. */
  @Input() isModalActive: boolean = false;

  /** Atributo que emite el estado del panel de accesibilidad. */
  @Output() modalStatusEmitter = new EventEmitter<boolean>();

  /** Elemento HTML que contiene los datos del overlay del panel de accesibilidad. */
  @ViewChild('modalOverlay') modalOverlay!: ElementRef;

  /**
   * @ignore
   */
  ngOnChanges(changes: SimpleChanges): void {
    let modalStatus = changes['isModalActive'];
    if (modalStatus.currentValue === true) {
      this.modalOverlay.nativeElement.classList.remove('hidden');
      this.modalOverlay.nativeElement.classList.add('flex');
    }
  }

  /**
   * Cierra el panel de accesibilidad.
   */
  closeModal(): void {
    this.isModalActive = false;
    this.modalStatusEmitter.emit(this.isModalActive);

    this.modalOverlay.nativeElement.classList.remove('flex');
    this.modalOverlay.nativeElement.classList.add('hidden');
  }
}
