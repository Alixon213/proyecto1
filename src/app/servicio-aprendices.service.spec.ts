import { TestBed } from '@angular/core/testing';

import { ServicioAprendicesService } from './servicio-aprendices.service';

describe('ServicioAprendicesService', () => {
  let service: ServicioAprendicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioAprendicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
