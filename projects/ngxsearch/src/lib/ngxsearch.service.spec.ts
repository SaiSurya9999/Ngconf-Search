import { TestBed } from '@angular/core/testing';

import { NgxsearchService } from './ngxsearch.service';

describe('NgxsearchService', () => {
  let service: NgxsearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxsearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
