import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  lists: string[];

  constructor() {
    this.lists = ['Donate', 'Endorsement', 'Petition', 'Blog', 'Contact Us'];
  }

  ngOnInit(): void {
  }

}
