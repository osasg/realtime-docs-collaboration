import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPageComponent } from './auth-page.component';
import { NoAuthGuard } from '../../shared/guards/no-auth.guard';

const routes: Routes = [
  {
    path: 'signin',
    component: AuthPageComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'signup',
    component: AuthPageComponent,
    canActivate: [NoAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthPageRoutingModule {}
