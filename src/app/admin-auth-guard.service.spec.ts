import { AdminAuthGuard } from './admin-auth-guard.service';

import { TestBed } from '@angular/core/testing';


describe('AdminAuthGuardService', () => {
  let service: AdminAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAuthGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
