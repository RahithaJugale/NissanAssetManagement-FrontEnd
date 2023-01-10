import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetDefinitionListComponent } from './asset-definition-list.component';

describe('AssetDefinitionListComponent', () => {
  let component: AssetDefinitionListComponent;
  let fixture: ComponentFixture<AssetDefinitionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetDefinitionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetDefinitionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
