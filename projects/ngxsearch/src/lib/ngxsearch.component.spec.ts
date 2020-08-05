import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxsearchComponent } from './ngxsearch.component';

describe('NgxsearchComponent', () => {
  let component: NgxsearchComponent;
  let fixture: ComponentFixture<NgxsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
