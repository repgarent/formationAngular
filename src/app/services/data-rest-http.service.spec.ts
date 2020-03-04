import { TestBed } from '@angular/core/testing';

import { DataRestHttpService } from './data-rest-http.service';

describe('DataRestHttpService', () => {
  let service: DataRestHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataRestHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
