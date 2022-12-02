import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.scss']
})
export class AuthContainerComponent implements OnInit {

  items: MenuItem[] | any;
  activeItem: MenuItem | any;

  constructor(private rout: Router ) { }

  ngOnInit(): void {
    this.items = [
      {label: 'Sign In',
        command: ()=>this.rout.navigate(['/signin'])
      },
      {label: 'Sign Up',
        command: ()=>this.rout.navigate(['/signup'])
      }
    ];
    this.activeItem = this.items[0];
  }

}
