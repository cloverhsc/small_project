/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetDataInterfaceService } from './get-data-interface.service';

describe('Service: GetDataInterface', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDataInterfaceService]
    });
  });

  it('should ...', inject([GetDataInterfaceService], (service: GetDataInterfaceService) => {
    expect(service).toBeTruthy();
  }));
});
