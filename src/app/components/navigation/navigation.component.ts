import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  session: any;
  lists: string[];
  userId: any;
  userName = localStorage.getItem('name')
  profile = localStorage.getItem('profile')
  constructor(private router: Router) {
    console.log(this.profile);
    this.lists = ['Home', 'Endorsement', 'Petition', 'Blog', 'Recommendations'];
  }

  ngOnInit(): void {
    this.session = localStorage.getItem("token");
    this.userId = localStorage.getItem("id");
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      this.hideLoginDialog();
    });
  }

  displayModal: boolean;

  showModalDialog() {
    this.displayModal = true;
  }

  hideModalDialog() {
    this.displayModal = false;
  }

  displayLogin: boolean;

  showLoginDialog() {
    this.displayLogin = true;
  }
  hideLoginDialog() {
    this.displayLogin = false;
  }

}
