import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ViewportService } from '../../services/viewport/viewport.service';
import { PopupService } from '../../services/popup/popup.service';

import { HeaderComponent } from './header.component';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { PopupComponent } from '../popup/popup.component';

import { PopupDirective } from '../../directives/popup/popup.directive';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [
        HeaderComponent,
        SvgIconComponent,
        PopupComponent,
        PopupDirective
      ],
      providers: [
        ViewportService,
        PopupService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
