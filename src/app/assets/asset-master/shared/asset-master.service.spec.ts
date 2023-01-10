import { TestBed } from '@angular/core/testing';

import { AssetMasterService } from './asset-master.service';

describe('AssetMasterService', () => {
  let service: AssetMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
