import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorManageComponent } from './vendor-manage.component';

describe('VendorManageComponent', () => {
  let component: VendorManageComponent;
  let fixture: ComponentFixture<VendorManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
