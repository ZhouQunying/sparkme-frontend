import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ViewportService } from '../../services/viewport/viewport.service';
import { DropdownService } from '../../services/dropdown/dropdown.service';

import { HeaderComponent } from './header.component';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { DropdownComponent } from '../dropdown/dropdown.component';

import { DropdownDirective } from '../../directives/dropdown/dropdown.directive';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [
        HeaderComponent,
        SvgIconComponent,
        DropdownComponent,
        DropdownDirective
      ],
      providers: [
        ViewportService,
        DropdownService
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
