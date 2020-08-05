import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgconfSearchComponent } from './ngconf-search.component';

describe('NgconfSearchComponent', () => {
  let component: NgconfSearchComponent;
  let fixture: ComponentFixture<NgconfSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgconfSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgconfSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
