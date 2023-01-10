import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetDefinitionManageComponent } from './asset-definition-manage.component';

describe('AssetDefinitionManageComponent', () => {
  let component: AssetDefinitionManageComponent;
  let fixture: ComponentFixture<AssetDefinitionManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetDefinitionManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetDefinitionManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
