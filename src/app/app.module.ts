import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './containers/AboutPage/about-page.component';
import { AuthPageComponent } from './containers/AuthPage/auth-page.component';
import { HomePageComponent } from './containers/HomePage/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    AuthPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
