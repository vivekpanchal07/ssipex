import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingaddComponent } from './parkingadd.component';

describe('ParkingaddComponent', () => {
  let component: ParkingaddComponent;
  let fixture: ComponentFixture<ParkingaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
