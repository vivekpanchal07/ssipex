import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngMaterialComponent } from './ang-material.component';

describe('AngMaterialComponent', () => {
  let component: AngMaterialComponent;
  let fixture: ComponentFixture<AngMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
