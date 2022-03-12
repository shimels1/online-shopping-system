import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClearkComponent } from './add-cleark.component';

describe('AddClearkComponent', () => {
  let component: AddClearkComponent;
  let fixture: ComponentFixture<AddClearkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClearkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClearkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
