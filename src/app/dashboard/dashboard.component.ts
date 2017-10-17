import { BlogPostStoreService } from '../shared/blog-post-store.service';
import { BlogPost } from './../shared/blog-post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doener-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  blogPosts: BlogPost[] = [];

  constructor(private blogPostStore: BlogPostStoreService) { }

  ngOnInit() {
    this.blogPosts = this.blogPostStore.getAllStatic();
  }
}
