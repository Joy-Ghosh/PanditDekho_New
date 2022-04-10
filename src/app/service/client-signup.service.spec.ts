import { TestBed } from '@angular/core/testing';

import { ClientSignupService } from './client-signup.service';

describe('ClientSignupService', () => {
  let service: ClientSignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientSignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
