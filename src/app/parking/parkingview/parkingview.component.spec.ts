import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingviewComponent } from './parkingview.component';

describe('ParkingviewComponent', () => {
  let component: ParkingviewComponent;
  let fixture: ComponentFixture<ParkingviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
