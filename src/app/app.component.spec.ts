import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ViewportService } from './shared/services/viewport/viewport.service';
import { PopupService } from './shared/services/popup/popup.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SvgIconComponent } from './shared/components/svg-icon/svg-icon.component';
import { PopupComponent } from './shared/components/popup/popup.component';

import { PopupDirective } from './shared/directives/popup/popup.directive';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        SvgIconComponent,
        PopupComponent,
        PopupDirective
      ],
      providers: [
        ViewportService,
        PopupService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
