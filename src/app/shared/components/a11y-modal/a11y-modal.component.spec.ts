import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A11yModalComponent } from './a11y-modal.component';

describe('A11yModalComponent', () => {
  let component: A11yModalComponent;
  let fixture: ComponentFixture<A11yModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A11yModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A11yModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
