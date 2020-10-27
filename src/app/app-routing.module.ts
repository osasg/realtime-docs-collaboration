import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
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
