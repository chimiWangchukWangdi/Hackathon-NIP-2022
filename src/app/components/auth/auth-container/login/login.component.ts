import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {AuthService} from "../../srvices/auth.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  signInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private auth: AuthService) {
}

  ngOnInit(): void {
  }

  logIn(): void {
    this.auth.login(this.signInForm.value).subscribe(value => {
      localStorage.setItem("token", value.token);
      localStorage.setItem("name", value.user.name);
      localStorage.setItem("email", value.user.email);
      localStorage.setItem("userType", value.user.userType);
      localStorage.setItem("id", value.user._id);
    })
  }
}
