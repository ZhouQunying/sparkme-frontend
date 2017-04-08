import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileModule } from './profile/profile.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SvgIconComponent } from './shared/components/svg-icon/svg-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SvgIconComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
