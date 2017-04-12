import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './navbar.component';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

import { ViewportService } from '../../services/viewport/viewport.service';

import { SvgDraw } from '../svg-icon/svg-draw';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [
        NavbarComponent,
        SvgIconComponent
      ],
      providers: [ViewportService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have searchIconDraw instanceof SvgDraw', () => {
    expect(component.searchIconDraw instanceof SvgDraw).toBeTruthy();
  });
});
