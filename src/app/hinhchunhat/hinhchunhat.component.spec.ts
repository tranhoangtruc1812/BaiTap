import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HinhchunhatComponent } from './hinhchunhat.component';

describe('HinhchunhatComponent', () => {
  let component: HinhchunhatComponent;
  let fixture: ComponentFixture<HinhchunhatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HinhchunhatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HinhchunhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
