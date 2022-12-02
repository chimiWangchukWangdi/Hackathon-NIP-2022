import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EndorsementService} from "../../services/endorsement/endorsement.service";
import {BlogPostService} from "../../services/blog-post/blog-post.service";
import {PetitionService} from "../../services/petition/petition.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  // display = true;
  anchorValue: string = "Thimphu";
  endorsementPost: any;
  blogPost: any;
  petitionPost: any;
  postTotal: any;

  toggle(button) {
    this.anchorValue = button.id;
    this.fetchEndorsementCount(this.anchorValue);
 }
    constructor(private router: Router, private endorsementService: EndorsementService, private postService: BlogPostService, private petitionService: PetitionService) {

     }

  ngOnInit(): void {
    this.fetchEndorsementCount("Thimphu");
  }

fetchEndorsementCount(location: any) {

  this.endorsementService.postCount(location)
    .subscribe(data => {

      this.endorsementPost = data.count;
      console.log(this.endorsementPost)
      console.log("en")
    })
  this.postService.postCount(location)
    .subscribe(data => {
      this.blogPost = data.count;
      console.log(this.blogPost)
      console.log("blog")

    })
  this.petitionService.postCount(location)
    .subscribe(data => {
      this.petitionPost = data.count;
      console.log(this.petitionPost)
      console.log("pet")

    })
  }

  seePosts(): void {
    console.log("thimphu")
    this.router.navigate(['post-locations', this.anchorValue]);
    console.log("thimphu")

  }
}
