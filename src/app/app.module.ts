import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/';

import { AppRoutingModule } from './app-routing.module';
import { MaterialRootModule } from './material.module';

import { AppComponent } from './app.component';
import { AboutPageComponent } from './containers/AboutPage/about-page.component';
import { AuthPageComponent } from './containers/AuthPage/auth-page.component';
import { HomePageComponent } from './containers/HomePage/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    SharedModule,
    MaterialRootModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
