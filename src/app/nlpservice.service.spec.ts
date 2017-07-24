import { TestBed, inject } from '@angular/core/testing';

import { NlpserviceService } from './nlpservice.service';

describe('NlpserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NlpserviceService]
    });
  });

  it('should be created', inject([NlpserviceService], (service: NlpserviceService) => {
    expect(service).toBeTruthy();
  }));
});
