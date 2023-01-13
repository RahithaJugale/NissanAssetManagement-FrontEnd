import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderManageComponent } from './purchase-order-manage.component';

describe('PurchaseOrderManageComponent', () => {
  let component: PurchaseOrderManageComponent;
  let fixture: ComponentFixture<PurchaseOrderManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseOrderManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrderManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
