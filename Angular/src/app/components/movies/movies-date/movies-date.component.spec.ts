import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesDateComponent } from './movies-date.component';

describe('MoviesDateComponent', () => {
  let component: MoviesDateComponent;
  let fixture: ComponentFixture<MoviesDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
