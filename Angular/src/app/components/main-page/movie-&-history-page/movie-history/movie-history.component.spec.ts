import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieHistoryComponent } from './movie-history.component';

describe('MovieHistoryComponent', () => {
  let component: MovieHistoryComponent;
  let fixture: ComponentFixture<MovieHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
