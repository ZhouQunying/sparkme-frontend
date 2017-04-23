import { Directive, Input, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @Input() appDropdown: string;

  constructor(private renderer: Renderer2) { }

  @HostListener('click') onClick() {
    this.renderer.selectRootElement('[avaterMenu]').style.display = 'block';
    console.log('click!');
  }
}
