import { TestBed } from '@angular/core/testing';

import { FavouriteService } from './favourites.service';

describe('FavouritesService', () => {
  let service: FavouriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
