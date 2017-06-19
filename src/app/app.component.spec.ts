import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ViewportService } from './shared/services/viewport/viewport.service';
import { DropdownService } from './shared/services/dropdown/dropdown.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SvgIconComponent } from './shared/components/svg-icon/svg-icon.component';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';

import { DropdownDirective } from './shared/directives/dropdown/dropdown.directive';

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
        DropdownComponent,
        DropdownDirective
      ],
      providers: [
        ViewportService,
        DropdownService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
