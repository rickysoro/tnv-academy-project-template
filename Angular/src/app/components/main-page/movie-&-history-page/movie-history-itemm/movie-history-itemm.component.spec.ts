import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieHistoryItemmComponent } from './movie-history-itemm.component';

describe('MovieHistoryItemmComponent', () => {
  let component: MovieHistoryItemmComponent;
  let fixture: ComponentFixture<MovieHistoryItemmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieHistoryItemmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieHistoryItemmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
