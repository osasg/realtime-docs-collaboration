import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ButtonGhostComponent } from './components/ButtonGhost/button-ghost.component';
import { ButtonPrimaryComponent } from './components/ButtonPrimary/button-primary.component';
import { LayoutComponent } from './components/Layout/layout.component';
import { NavbarComponent } from './components/Navbar/navbar.component';
import { SidebarComponent } from './components/Sidebar/sidebar.component';
import { FooterComponent } from './components/Footer/footer.component';

import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';

import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { AuthInterceptor } from './interceptors/access-token.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    ButtonGhostComponent,
    ButtonPrimaryComponent,
    LayoutComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    AuthService,
    DataService,
    AuthGuard,
    NoAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ]
})
export class SharedModule {}
