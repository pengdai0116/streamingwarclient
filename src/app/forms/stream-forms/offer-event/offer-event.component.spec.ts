import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferEventComponent } from './offer-event.component';

describe('OfferEventComponent', () => {
  let component: OfferEventComponent;
  let fixture: ComponentFixture<OfferEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
