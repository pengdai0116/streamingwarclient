import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferEventListComponent } from './offer-list.component';

describe('OfferEventListComponent', () => {
  let component: OfferEventListComponent;
  let fixture: ComponentFixture<OfferEventListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferEventListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
