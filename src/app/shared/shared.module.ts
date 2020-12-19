import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MaterialRootModule } from '../material.module';

import { ButtonGhostComponent } from './components/ButtonGhost/button-ghost.component';
import { ButtonPrimaryComponent } from './components/ButtonPrimary/button-primary.component';
import { LayoutComponent } from './components/Layout/layout.component';
import { NavbarComponent } from './components/Navbar/navbar.component';
import { SidebarComponent } from './components/Sidebar/sidebar.component';
import { FooterComponent } from './components/Footer/footer.component';
import { HeaderComponent } from './components/Header/header.component';

import { DataService } from './services/data.service';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { NoAuthGuard } from './guards/no-auth.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MaterialRootModule
  ],
  declarations: [
    ButtonGhostComponent,
    ButtonPrimaryComponent,
    LayoutComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent
  ],
  exports: [
    ButtonGhostComponent,
    ButtonPrimaryComponent,
    LayoutComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent
  ],
  providers: [
    DataService,
    NoAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ]
})
export class SharedModule {}
