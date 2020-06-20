import { TestBed } from '@angular/core/testing';

import { ContributionsService } from './contributions.service';

describe('ContributionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContributionsService = TestBed.get(ContributionsService);
    expect(service).toBeTruthy();
  });
});
