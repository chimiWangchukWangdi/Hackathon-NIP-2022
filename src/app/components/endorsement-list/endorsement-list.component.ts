import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EndorsementService} from "../../services/endorsement/endorsement.service";
import {catagories} from "../../shared/constants";

@Component({
  selector: 'app-endorsement-list',
  templateUrl: './endorsement-list.component.html',
  styleUrls: ['./endorsement-list.component.scss']
})
export class EndorsementListComponent implements OnInit {
  posts: any;
  items: string[];
  categories = catagories;
  constructor(private endoresementService: EndorsementService, private router: Router) {
    this.items = ['All', 'Technology', 'Sports', 'Programming', 'Something', 'Anything'];

  }

  ngOnInit(): void {
    this.endoresementService.getAllPost()
      .subscribe(data => {
        this.posts = data;
        console.log(this.posts)
      })
  }

  readMore(_id: string): void {
    this.router.navigate(['endorsement', _id]);
  }

}
