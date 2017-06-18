import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileModule } from './profile/profile.module';

import { HeaderComponent } from './shared/components/header/header.component';
import { SvgIconComponent } from './shared/components/svg-icon/svg-icon.component';

import { ViewportService } from './shared/services/viewport/viewport.service';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';
import { DropdownDirective } from './shared/components/dropdown/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SvgIconComponent,
    DropdownComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    ProfileModule
  ],
  providers: [ViewportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
