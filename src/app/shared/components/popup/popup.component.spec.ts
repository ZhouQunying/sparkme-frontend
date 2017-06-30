import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewportService } from '../../services/viewport/viewport.service';
import { PopupService } from '../../services/popup/popup.service';
import { PopupComponent } from './popup.component';

describe('PopupComponent', () => {
  let component: PopupComponent;
  let fixture: ComponentFixture<PopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PopupComponent],
      providers: [
        ViewportService,
        PopupService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
