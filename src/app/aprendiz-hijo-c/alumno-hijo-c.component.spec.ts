import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoHijoCComponent } from './alumno-hijo-c.component';

describe('AlumnoHijoCComponent', () => {
  let component: AlumnoHijoCComponent;
  let fixture: ComponentFixture<AlumnoHijoCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnoHijoCComponent]
    });
    fixture = TestBed.createComponent(AlumnoHijoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
