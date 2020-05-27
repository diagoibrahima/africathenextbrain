import { TestBed } from '@angular/core/testing';

import { AuhtenticationService } from './auhtentication.service';

describe('AuhtenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuhtenticationService = TestBed.get(AuhtenticationService);
    expect(service).toBeTruthy();
  });
});
