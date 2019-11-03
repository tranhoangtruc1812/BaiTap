import { TestBed } from '@angular/core/testing';

import { CustommerService } from './custommer.service';

describe('CustommerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustommerService = TestBed.get(CustommerService);
    expect(service).toBeTruthy();
  });
});
