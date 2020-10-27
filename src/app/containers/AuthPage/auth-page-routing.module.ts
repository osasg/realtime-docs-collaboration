import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoAuthGuard } from 'src/app/shared/guards/no-auth.guard';
import { AuthPageComponent } from './auth-page.component';

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
