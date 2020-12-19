import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, USE_DEVICE_LANGUAGE, USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';

import { SharedModule } from './shared/';
import { AppRoutingModule } from './app-routing.module';
import { MaterialRootModule } from './material.module';
import { DashboardPageModule } from './containers/DashboardPage/dashboard-page.module';
import { environment } from '../environments/environment';

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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    SharedModule,
    MaterialRootModule,
    BrowserAnimationsModule,
    DashboardPageModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
