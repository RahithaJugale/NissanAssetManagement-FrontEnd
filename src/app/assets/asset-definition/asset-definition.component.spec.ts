import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetDefinitionComponent } from './asset-definition.component';

describe('AssetDefinitionComponent', () => {
  let component: AssetDefinitionComponent;
  let fixture: ComponentFixture<AssetDefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetDefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
