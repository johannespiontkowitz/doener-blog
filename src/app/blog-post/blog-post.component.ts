import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../shared/blog-post';

@Component({
  selector: 'doener-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  @Input() blogPost: BlogPost;

  constructor() { }

  ngOnInit() {
  }

}
