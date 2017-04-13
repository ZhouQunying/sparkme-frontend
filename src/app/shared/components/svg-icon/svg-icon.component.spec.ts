import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgIconComponent } from './svg-icon.component';
import { SvgDraw } from './svg-draw';

describe('SvgIconComponent', () => {
  let component: SvgIconComponent;
  let fixture: ComponentFixture<SvgIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SvgIconComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgIconComponent);
    component = fixture.componentInstance;
    component.draw = new SvgDraw({
      path: ''
    });
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
