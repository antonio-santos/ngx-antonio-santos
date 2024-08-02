import { TestBed } from '@angular/core/testing';

import { ASantosService } from './a-santos.service';

describe('ASantosService', () => {
  let service: ASantosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ASantosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
