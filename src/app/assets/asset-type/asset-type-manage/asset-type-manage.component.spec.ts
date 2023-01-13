import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTypeManageComponent } from './asset-type-manage.component';

describe('AssetTypeManageComponent', () => {
  let component: AssetTypeManageComponent;
  let fixture: ComponentFixture<AssetTypeManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetTypeManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetTypeManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
