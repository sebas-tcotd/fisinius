import { TestBed } from '@angular/core/testing';

import { A11yService } from './a11y.service';

describe('A11yService', () => {
  let service: A11yService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(A11yService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
