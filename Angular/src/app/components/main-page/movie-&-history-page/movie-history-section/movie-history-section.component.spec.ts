import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieHistorySectionComponent } from './movie-history-section.component';

describe('MovieHistorySectionComponent', () => {
  let component: MovieHistorySectionComponent;
  let fixture: ComponentFixture<MovieHistorySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieHistorySectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieHistorySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
