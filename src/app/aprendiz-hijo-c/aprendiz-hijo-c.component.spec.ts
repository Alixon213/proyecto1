import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprendizHijoCComponent } from './aprendiz-hijo-c.component';

describe('AprendizHijoCComponent', () => {
  let component: AprendizHijoCComponent;
  let fixture: ComponentFixture<AprendizHijoCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AprendizHijoCComponent]
    });
    fixture = TestBed.createComponent(AprendizHijoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
