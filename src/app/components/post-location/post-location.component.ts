import { Component, OnInit } from '@angular/core';
import {EndorsementService} from "../../services/endorsement/endorsement.service";
import { ActivatedRoute, Params } from '@angular/router';
import {catagories} from "../../shared/constants";


@Component({
  selector: 'app-post-location',
  templateUrl: './post-location.component.html',
  styleUrls: ['./post-location.component.scss']
})
export class PostLocationComponent implements OnInit {
  location: any;
  items: string[];
  posts: any;

  categories = catagories;

  constructor(private endorsementService: EndorsementService, private route: ActivatedRoute) {
    this.items = ['All', 'Technology', 'Sports', 'Programming'];

  }

  ngOnInit(): void {
    this.location = this.route.snapshot.params['location']
    this.endorsementService.postByLocation(location)
      .subscribe(data => {
        this.posts = data;
        console.log(this.posts)
    })
  }
}
