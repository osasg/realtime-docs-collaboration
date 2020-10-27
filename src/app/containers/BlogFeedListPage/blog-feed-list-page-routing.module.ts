import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoAuthGuard } from 'src/app/shared/guards/no-auth.guard';
import { BlogFeedListPageComponent } from './blog-feed-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: BlogFeedListPageComponent,
    canActivate: [NoAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogFeedListPageRoutingModule {}
