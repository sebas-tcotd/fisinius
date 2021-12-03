import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBodyComponent } from './news-body.component';

describe('NewsBodyComponent', () => {
  let component: NewsBodyComponent;
  let fixture: ComponentFixture<NewsBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
