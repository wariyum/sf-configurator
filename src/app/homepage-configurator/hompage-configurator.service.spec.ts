import { TestBed } from '@angular/core/testing';

import { HompageConfiguratorService } from './hompage-configurator.service';

describe('HompageConfiguratorService', () => {
  let service: HompageConfiguratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HompageConfiguratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
