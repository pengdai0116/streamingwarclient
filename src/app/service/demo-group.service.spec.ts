import { TestBed } from '@angular/core/testing';

import { DemoGroupService } from './demo-group.service';

describe('DemoGroupService', () => {
  let service: DemoGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
