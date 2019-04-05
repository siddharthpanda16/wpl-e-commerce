import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserService } from '../services/userServices';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private sharedData: DataService, private userService: UserService, private formBuilder: FormBuilder, private router: Router) {
    this.createForm();
  }

  user: User = new User;
  loginForm: FormGroup;
  submitted: Boolean = false;
  success: Boolean = true;

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9_]+')]],
      password: ['', Validators.required]
    });
  }

  onLogin(username, password) {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.userService.validateUser(username, password).subscribe(user => {
        console.log(username + ' ' + password + '  ' + this.user.username + '  ' + this.user.password)
        this.sharedData.setUser(user);
        this.success = true;
        sessionStorage.setItem("keyname", user.id);
        // console.log(this.sharedData.currentUser);
        this.router.navigate(['/']);
      }, err => {
        this.router.navigate(['/login']);
        this.success = false;
      }); 
    }

  }
}