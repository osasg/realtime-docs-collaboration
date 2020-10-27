import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoAuthGuard } from 'src/app/shared/guards/no-auth.guard';
import { AboutPageComponent } from './about-page.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutPageComponent,
    canActivate: [NoAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutPageRoutingModule {}
