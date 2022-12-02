import { Component, OnInit } from '@angular/core';
import {EndorsementService} from "../../services/endorsement/endorsement.service";
import {PetitionService} from "../../services/petition/petition.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  id: any = '634a1e7007d116e880068df8';
  posts: any;
  endorsePosts: any;
  petitionPosts: any;

  constructor( private endorsementService : EndorsementService, private petitionService : PetitionService) { }

  ngOnInit(): void {
    this.endorsementService.getAPost(this.id).subscribe(data=> {
        this.posts = data;
      }
    );

    this.endorsementService.getPost().subscribe(data=> {
        this.endorsePosts = data;
      }
    );

    this.petitionService.getPost().subscribe(data => {
      this.petitionPosts = data;
    })
  }



}
