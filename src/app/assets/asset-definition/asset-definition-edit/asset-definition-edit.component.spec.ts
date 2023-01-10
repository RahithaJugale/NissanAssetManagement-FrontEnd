import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetDefinitionEditComponent } from './asset-definition-edit.component';

describe('AssetDefinitionEditComponent', () => {
  let component: AssetDefinitionEditComponent;
  let fixture: ComponentFixture<AssetDefinitionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetDefinitionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetDefinitionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
