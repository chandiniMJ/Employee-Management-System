import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMSComponent } from './ems.component';

describe('EMSComponent', () => {
  let component: EMSComponent;
  let fixture: ComponentFixture<EMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
