import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetMasterListComponent } from './asset-master-list.component';

describe('AssetMasterListComponent', () => {
  let component: AssetMasterListComponent;
  let fixture: ComponentFixture<AssetMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
