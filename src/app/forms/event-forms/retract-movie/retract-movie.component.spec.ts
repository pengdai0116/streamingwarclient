import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetractMovieComponent } from './retract-movie.component';

describe('RetractMovieComponent', () => {
  let component: RetractMovieComponent;
  let fixture: ComponentFixture<RetractMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetractMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetractMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
