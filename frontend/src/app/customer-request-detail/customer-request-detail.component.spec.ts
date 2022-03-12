import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRequestDetailComponent } from './customer-request-detail.component';

describe('CustomerRequestDetailComponent', () => {
  let component: CustomerRequestDetailComponent;
  let fixture: ComponentFixture<CustomerRequestDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerRequestDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRequestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
