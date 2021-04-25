import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStreamComponent } from './update-stream.component';

describe('UpdateStreamComponent', () => {
  let component: UpdateStreamComponent;
  let fixture: ComponentFixture<UpdateStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
