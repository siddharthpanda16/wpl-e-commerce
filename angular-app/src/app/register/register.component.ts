import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserService } from '../services/userServices';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User, Card } from '../models/user';
import { Router } from "@angular/router";
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private sharedData: DataService, private userService: UserService, private formBuilder: FormBuilder, private router: Router) {
    this.createForm();
  }

  user: User = new User;
  registerForm: FormGroup;
  submitted: Boolean = false;
  success: Boolean = true;

  ngOnInit() {
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      displayname: ['', Validators.required],
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9_]+')]],
      card_details: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    });
  }

  onRegister(displayname, username, card_details, password, confirm_password) {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.user.displayName = displayname;
      this.user.username = username;
      this.user.password = password;
      this.user.level = 1;
      this.user.billing.ccNum =  card_details ? String(card_details).split('/')[0] : "1111111111111111";
      this.user.billing.ccExp = card_details ? String(card_details).split('/')[1] : "11111111";
      this.user.billing.ccCVV = card_details ? String(card_details).split('/')[2] : "111";
      console.log( this.user );
      this.userService.addUser(this.user).subscribe(user => {
        console.log(user['id'],"returned from register");
        sessionStorage.setItem("keyname", user.id);
        this.router.navigate(['/']);
      }, err => {
        this.success=false;
        this.router.navigate(['/register']);
      });
    }
  }

}
