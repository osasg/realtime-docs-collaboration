import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ButtonGhostComponent } from './components/ButtonGhost/button-ghost.component';
import { ButtonPrimaryComponent } from './components/ButtonPrimary/button-primary.component';
import { LayoutComponent } from './components/Layout/layout.component';
import { NavbarComponent } from './components/Navbar/navbar.component';
import { SidebarComponent } from './components/Sidebar/sidebar.component';
import { FooterComponent } from './components/Footer/footer.component';

import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';

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
    DataService
  ]
})
export class SharedModule {}
