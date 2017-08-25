import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './shared/components/header/header.component';
import { SvgIconComponent } from './shared/components/svg-icon/svg-icon.component';
import { PopupComponent } from './shared/components/popup/popup.component';

import { PopupDirective } from './shared/directives/popup/popup.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    SvgIconComponent,
    PopupComponent,

    PopupDirective
  ],
  exports: [
    CommonModule,

    HeaderComponent
  ]
})
export class SharedModule { }
