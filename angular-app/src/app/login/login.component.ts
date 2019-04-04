import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserService } from '../services/userServices';
import { FormGroup,FormBuilder } from '@angular/forms';
import {User} from '../models/user';
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private sharedData:DataService, private userService:UserService, private formBuilder: FormBuilder, private router: Router) {
    this.createForm();
  }

  user: User= new User;
  loginForm: FormGroup;

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: [],
      password:[]
    });
  }

  onLogin(username,password){
    this.userService.validateUser(username, password).subscribe( user => {
      console.log(username +' '+ password + '  '+this.user.username+'  '+this.user.password)
      this.sharedData.setUser(user);
      // console.log(this.sharedData.currentUser);
      this.router.navigate(['/']);
    }, err=> {
      this.router.navigate(['/login']);
    });
  }
}
