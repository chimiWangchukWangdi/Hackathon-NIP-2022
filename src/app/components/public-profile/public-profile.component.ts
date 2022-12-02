import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import { ActivatedRoute, Params } from '@angular/router';
import { ProfileService } from 'src/app/services/profile/profile.service';
import {EndorsementService} from "../../services/endorsement/endorsement.service";

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss']
})
export class PublicProfileComponent implements OnInit {

  displayProfile: boolean;

  showProfileDialog() {
    this.displayProfile = true;
  }
  hideProfileDialog() {
    this.displayProfile = false;
  }

  id: any;
  userId = localStorage.getItem("id");
  items: string[];
  userDetail: any;
  userPost: any;
  posts: any;

  constructor(private api: ApiService, private route: ActivatedRoute, private profileService: ProfileService, private endorsementService: EndorsementService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id']
    console.log(this.id)
       this.profileService.getAUser(this.id)
         .subscribe(data => {
           this.userDetail = data;
           console.log(this.userDetail)
         })
      this.endorsementService.getAllPost().subscribe(data => {
          this.posts = data;
        }
      )
  }
}
