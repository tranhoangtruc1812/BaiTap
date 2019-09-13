import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSVComponent } from './list-sv.component';

describe('ListSVComponent', () => {
  let component: ListSVComponent;
  let fixture: ComponentFixture<ListSVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
