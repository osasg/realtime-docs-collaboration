import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogFeedListPageComponent } from './blog-feed-list-page.component';
import { BlogFeedListPageRoutingModule } from './blog-feed-list-page-routing.module';

@NgModule({
  declarations: [
    BlogFeedListPageComponent
  ],
  imports: [
    CommonModule,
    BlogFeedListPageRoutingModule
  ]
})
export class BlogFeedListPageModule { }
