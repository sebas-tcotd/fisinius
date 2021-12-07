import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-a11y-modal',
  templateUrl: './a11y-modal.component.html',
  styleUrls: [],
})
export class A11yModalComponent implements OnInit, OnChanges {
  @Input() isModalActive: boolean = false;
  @Output() modalStatusEmitter = new EventEmitter<boolean>();
  @ViewChild('modalOverlay') modalOverlay!: ElementRef;
  // modalOverlay = document.getElementById('overlay');

  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges) {
    let modalStatus = changes['isModalActive'];
    if (modalStatus.currentValue === true) {
      this.modalOverlay.nativeElement.classList.remove('hidden');
      this.modalOverlay.nativeElement.classList.add('flex');
    }
  }

  closeModal() {
    this.isModalActive = false;
    this.modalStatusEmitter.emit(this.isModalActive);

    this.modalOverlay.nativeElement.classList.remove('flex');
    this.modalOverlay.nativeElement.classList.add('hidden');
  }
}
