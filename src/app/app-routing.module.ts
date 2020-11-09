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
    path: 'blogfeeds',
    loadChildren: () => import('./containers/BlogFeedListPage/blog-feed-list-page.module').then(m => m.BlogFeedListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
