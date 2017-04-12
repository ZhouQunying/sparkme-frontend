import { TestBed, inject } from '@angular/core/testing';

import { ViewportService } from './viewport.service';

describe('ViewportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewportService]
    });
  });

  it('should ...', inject([ViewportService], (service: ViewportService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getWindowWidth()', () => {
    it('should return current window width', inject([ViewportService], (service: ViewportService) => {
      expect(service.getWindowWidth()).toBeTruthy();
    }));
  });
});
