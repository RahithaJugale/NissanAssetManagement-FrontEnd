import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetDefinitionAddComponent } from './asset-definition-add.component';

describe('AssetDefinitionAddComponent', () => {
  let component: AssetDefinitionAddComponent;
  let fixture: ComponentFixture<AssetDefinitionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetDefinitionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetDefinitionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
