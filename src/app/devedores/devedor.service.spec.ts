import { TestBed } from '@angular/core/testing';

import { DevedorService } from './devedor.service';

describe('DevedorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevedorService = TestBed.get(DevedorService);
    expect(service).toBeTruthy();
  });
});
