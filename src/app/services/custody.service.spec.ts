import { TestBed, inject } from '@angular/core/testing';

import { CustodyService } from './custody.service';

describe('CustodyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustodyService]
    });
  });

  it('should be created', inject([CustodyService], (service: CustodyService) => {
    expect(service).toBeTruthy();
  }));
});
