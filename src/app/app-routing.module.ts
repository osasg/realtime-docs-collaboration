import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './containers/HomePage/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: '',
    loadChildren: () => import('./containers/AuthPage/auth-page.module').then(m => m.AuthPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./containers/DashboardPage/dashboard-page.module').then(m => m.DashboardPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
