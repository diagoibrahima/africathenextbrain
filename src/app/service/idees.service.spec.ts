import { TestBed } from '@angular/core/testing';

import { IdeesService } from './idees.service';

describe('IdeesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdeesService = TestBed.get(IdeesService);
    expect(service).toBeTruthy();
  });
});
