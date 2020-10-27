import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFeedListPageComponent } from './blog-feed-list-page.component';

describe('BlogFeedListPageComponent', () => {
  let component: BlogFeedListPageComponent;
  let fixture: ComponentFixture<BlogFeedListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogFeedListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFeedListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
