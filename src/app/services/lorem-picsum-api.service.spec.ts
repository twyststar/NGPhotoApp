import { TestBed } from '@angular/core/testing';

import { LoremPicsumApiService } from './lorem-picsum-api.service';

describe('LoremPicsumApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoremPicsumApiService = TestBed.get(LoremPicsumApiService);
    expect(service).toBeTruthy();
  });
});
