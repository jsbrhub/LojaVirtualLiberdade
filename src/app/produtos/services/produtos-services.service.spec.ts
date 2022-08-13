import { TestBed } from '@angular/core/testing';

import { ProdutosServicesService } from './produtos-services.service';

describe('ProdutosServicesService', () => {
  let service: ProdutosServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutosServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
