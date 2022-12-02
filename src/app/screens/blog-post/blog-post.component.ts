import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPostService } from 'src/app/services/blog-post/blog-post.service';
import { EndorsementService } from 'src/app/services/endorsement/endorsement.service';
import {catagories} from "../../shared/constants";


@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  posts: any;
  // items: string[];
  categories = catagories;


  constructor(private blogPostService: BlogPostService, private router: Router) {
    // this.items = ['All', 'Technology', 'Sports', 'Programming', 'Something', 'Anything'];


  }

  ngOnInit(): void {

    this.blogPostService.getAllPost()
      .subscribe(data => {
        this.posts = data;
        console.log(this.posts)
      })
  }

  readMore(_id: string): void {
    this.router.navigate(['blog', _id]);
  }

}
