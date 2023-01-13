import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetMasterManageComponent } from './asset-master-manage.component';

describe('AssetMasterManageComponent', () => {
  let component: AssetMasterManageComponent;
  let fixture: ComponentFixture<AssetMasterManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetMasterManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetMasterManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
