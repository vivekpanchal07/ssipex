import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingBookComponent } from './parking-book.component';

describe('ParkingBookComponent', () => {
  let component: ParkingBookComponent;
  let fixture: ComponentFixture<ParkingBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
