import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared.module';

import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [SharedModule],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
