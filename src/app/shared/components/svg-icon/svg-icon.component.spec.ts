import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgIconComponent } from './svg-icon.component';

describe('SvgIconComponent', () => {
  let component: SvgIconComponent;
  let fixture: ComponentFixture<SvgIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SvgIconComponent]
    })
    .compileComponents();
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
