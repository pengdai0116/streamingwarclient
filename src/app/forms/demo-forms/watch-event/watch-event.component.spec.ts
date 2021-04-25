import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchEventComponent } from './watch-event.component';

describe('WatchEventComponent', () => {
  let component: WatchEventComponent;
  let fixture: ComponentFixture<WatchEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
