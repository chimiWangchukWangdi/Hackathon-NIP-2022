import { Component, OnInit } from '@angular/core';
import { PetitionService } from 'src/app/services/petition/petition.service';
import { Router } from '@angular/router';
import {catagories} from "../../shared/constants";

@Component({
  selector: 'app-petition-list',
  templateUrl: './petition-list.component.html',
  styleUrls: ['./petition-list.component.scss']
})
export class PetitionListComponent implements OnInit {
  posts: any;
  items: string[];
  categories = catagories;

  constructor(private petitionService: PetitionService, private router: Router) {
    this.items = ['All', 'Technology', 'Sports', 'Programming', 'Something', 'Anything'];

  }

  ngOnInit(): void {
    this.petitionService.getAllPost()
      .subscribe(data => {
        this.posts = data;
        console.log(this.posts)
      })
  }

  readMore(_id: string): void {
    this.router.navigate(['petition', _id]);
  }

}
