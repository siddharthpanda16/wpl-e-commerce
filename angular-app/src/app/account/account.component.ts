import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserService } from '../services/userServices';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User, Card } from '../models/user';
import { Router } from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private sharedData: DataService, private userService: UserService, private formBuilder: FormBuilder, private router: Router) {
    this.createForm();
  }

  user: User = new User;
  registerForm: FormGroup;
  submitted: Boolean = false;
  success: Boolean = true;
  invalid: Boolean = false;
  
  ngOnInit() {
    if (sessionStorage.getItem("keyname")) {
      this.userService.getUser(sessionStorage.getItem("keyname")).subscribe(user => this.sharedData.setUser(user));
      this.sharedData.currentUser.subscribe(user => {
        if (user == null || user.username == '') {
          this.router.navigate(['/login']);
        }
        else {
          this.router.navigate(['/account']);
         // this.sortMoviesByGenre();
          this.user = user;
        }
      });
    }
    else {
      this.router.navigate(['/login']);
    }

    console.log(this.user);
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      displayname: ['', Validators.required],
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9_]+')]],
      card_details: [],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    });
  }

  onRegister(displayname, username,card_details, password, confirm_password) {
    this.submitted = true;
    //console.log(this.registerForm.controls["username"].touched);
    //if (this.registerForm.valid) {
      this.user.displayName = displayname;
      this.user.username = username;
      this.user.password = password;
      this.user.level = 1;
      this.user.billing.ccNum = String(card_details).split('/')[0];
      this.user.billing.ccExp = String(card_details).split('/')[1];
      this.user.billing.ccCVV = String(card_details).split('/')[2];

      this.userService.updateUser(this.user).subscribe(user => {
        this.sharedData.setUser(user);
        sessionStorage.setItem("keyname", user.id);
        // console.log(this.sharedData.currentUser);
        //this.router.navigate(['/']);
      }, err => {
        this.success=false;
        this.router.navigate(['/account']);
      });
    //}
    // else{
    //   this.invalid=true;

    // }
  }

}
