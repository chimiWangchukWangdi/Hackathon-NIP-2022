import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {AuthService} from "../../srvices/auth.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeatPassword: new FormControl(''),
    contact: new FormControl(''),
    gender: new FormControl(''),
    userType: new FormControl('')
  });

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  signUp(): void {
    const {repeatPassword, ...rest} = this.signUpForm.value
   // this.auth.signup(rest).subscribe(value => console.log(value))
  }
}
