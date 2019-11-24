import { TestBed } from '@angular/core/testing';

import { DevedorDataService } from './devedor-data.service';

describe('DevedorDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevedorDataService = TestBed.get(DevedorDataService);
    expect(service).toBeTruthy();
  });
});
