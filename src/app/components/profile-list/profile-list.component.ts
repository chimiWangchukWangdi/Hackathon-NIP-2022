import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
  userProfiles: any;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {

    this.profileService.getAllUser()
      .subscribe(data => {
        this.userProfiles = data;
        // this.objectLenght = Object.keys(this.userProfiles).length
        console.log(this.userProfiles)
      })
  }
}
