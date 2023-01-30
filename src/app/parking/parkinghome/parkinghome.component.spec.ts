import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkinghomeComponent } from './parkinghome.component';

describe('ParkinghomeComponent', () => {
  let component: ParkinghomeComponent;
  let fixture: ComponentFixture<ParkinghomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkinghomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkinghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
