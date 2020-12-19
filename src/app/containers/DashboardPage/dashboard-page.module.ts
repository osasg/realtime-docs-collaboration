import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared';
import { DashboardPageRoutingModule } from './dashboard-page-routing.module';

import { DashboardPageComponent } from './dashboard-page.component';

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardPageRoutingModule
  ]
})
export class DashboardPageModule { }
