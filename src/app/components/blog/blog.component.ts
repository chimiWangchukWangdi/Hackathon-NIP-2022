import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPostService } from 'src/app/services/blog-post/blog-post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  id: string = '';
  blogPost: any;
  blogPosts: any;
  comments: any;

  constructor(private blogPostService: BlogPostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.blogPostDetail();
  }

  convertDate(date: string){
    return new Date(date).toDateString()
  }

  blogPostDetail(): void{
    this.blogPostService.getAPost(this.id).subscribe(blogPost => {
      this.blogPost = blogPost;
      this.comments = this.blogPost.comments;
      console.log(this.comments)
      console.log(this.blogPost)
    });
  }

}
