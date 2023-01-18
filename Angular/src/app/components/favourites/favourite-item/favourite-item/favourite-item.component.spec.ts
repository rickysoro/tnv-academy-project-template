import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteItemComponent } from './favourite-item.component';

describe('FavouriteItemComponent', () => {
  let component: FavouriteItemComponent;
  let fixture: ComponentFixture<FavouriteItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouriteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
