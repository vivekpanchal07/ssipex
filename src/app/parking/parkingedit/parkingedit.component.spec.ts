import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingeditComponent } from './parkingedit.component';

describe('ParkingeditComponent', () => {
  let component: ParkingeditComponent;
  let fixture: ComponentFixture<ParkingeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
