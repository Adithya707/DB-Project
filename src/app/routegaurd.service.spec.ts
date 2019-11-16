import { TestBed } from '@angular/core/testing';

import { RoutegaurdService } from './routegaurd.service';

describe('RoutegaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoutegaurdService = TestBed.get(RoutegaurdService);
    expect(service).toBeTruthy();
  });
});
