import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { DropdownComponent } from '../shared/components/dropdown/dropdown.component';

import { DropdownDirective } from '../shared/directives/dropdown/dropdown.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ProfileComponent,
    // DropdownComponent,
    // DropdownDirective,
  ]
})
export class ProfileModule { }
