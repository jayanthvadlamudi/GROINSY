import { TestBed } from '@angular/core/testing';

import { GROINCYService } from './groincy.service';

describe('GROINCYService', () => {
  let service: GROINCYService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GROINCYService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
