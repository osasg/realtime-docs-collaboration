import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRootModule } from 'src/app/material.module';
import { AuthPageRoutingModule } from './auth-page-routing.module';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthPageRoutingModule,
    MaterialRootModule,
    SharedModule
  ]
})
export class AuthPageModule { }
