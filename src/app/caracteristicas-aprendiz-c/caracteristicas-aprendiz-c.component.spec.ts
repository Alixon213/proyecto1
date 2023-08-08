import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasAprendizCComponent } from './caracteristicas-aprendiz-c.component';

describe('CaracteristicasAprendizCComponent', () => {
  let component: CaracteristicasAprendizCComponent;
  let fixture: ComponentFixture<CaracteristicasAprendizCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaracteristicasAprendizCComponent]
    });
    fixture = TestBed.createComponent(CaracteristicasAprendizCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
