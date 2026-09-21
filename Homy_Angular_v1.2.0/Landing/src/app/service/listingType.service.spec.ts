/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListingTypeService } from './listingType.service';

describe('Service: ListingType', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListingTypeService]
    });
  });

  it('should ...', inject([ListingTypeService], (service: ListingTypeService) => {
    expect(service).toBeTruthy();
  }));
});
