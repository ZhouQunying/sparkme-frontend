import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileModule } from './profile/profile.module';

import { ViewportService } from './shared/services/viewport/viewport.service';
import { PopupService } from './shared/services/popup/popup.service';

import { HeaderComponent } from './shared/components/header/header.component';
import { SvgIconComponent } from './shared/components/svg-icon/svg-icon.component';
import { PopupComponent } from './shared/components/popup/popup.component';

import { PopupDirective } from './shared/directives/popup/popup.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SvgIconComponent,
    PopupComponent,
    PopupDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    ProfileModule
  ],
  providers: [
    ViewportService,
    PopupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
