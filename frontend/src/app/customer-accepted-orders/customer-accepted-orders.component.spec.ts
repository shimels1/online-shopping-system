import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAcceptedOrdersComponent } from './customer-accepted-orders.component';

describe('CustomerAcceptedOrdersComponent', () => {
  let component: CustomerAcceptedOrdersComponent;
  let fixture: ComponentFixture<CustomerAcceptedOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAcceptedOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAcceptedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
