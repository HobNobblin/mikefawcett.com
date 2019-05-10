import { TestBed } from '@angular/core/testing';

import { MikefawcettComApiService } from './mikefawcett-com-api.service';

describe('MikefawcettComApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MikefawcettComApiService = TestBed.get(MikefawcettComApiService);
    expect(service).toBeTruthy();
  });
});
