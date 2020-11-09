import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRootModule } from 'src/app/material.module';
import { AuthPageRoutingModule } from './auth-page-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthPageRoutingModule,
    MaterialRootModule
  ]
})
export class AuthPageModule { }
