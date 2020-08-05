import { TestBed } from '@angular/core/testing';

import { NgconfSearchService } from './ngconf-search.service';

describe('NgconfSearchService', () => {
  let service: NgconfSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgconfSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
