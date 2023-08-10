import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasAlumnoCComponent } from './caracteristicas-alumno-c.component';

describe('CaracteristicasAprendizCComponent', () => {
  let component: CaracteristicasAlumnoCComponent;
  let fixture: ComponentFixture<CaracteristicasAlumnoCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaracteristicasAlumnoCComponent]
    });
    fixture = TestBed.createComponent(CaracteristicasAlumnoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
