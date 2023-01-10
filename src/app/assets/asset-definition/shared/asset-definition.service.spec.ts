import { TestBed } from '@angular/core/testing';

import { AssetDefinitionService } from './asset-definition.service';

describe('AssetDefinitionService', () => {
  let service: AssetDefinitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetDefinitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
