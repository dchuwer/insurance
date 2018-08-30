import { TestBed, inject } from '@angular/core/testing';

import { FactorymodelService } from './factorymodel.service';

describe('FactorymodelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FactorymodelService]
    });
  });

  it('should be created', inject([FactorymodelService], (service: FactorymodelService) => {
    expect(service).toBeTruthy();
  }));
});
