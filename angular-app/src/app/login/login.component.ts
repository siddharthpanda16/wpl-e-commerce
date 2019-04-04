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

  validateUser(username:string, password:string) {
    /* this.userService.getUser(username).subscribe( user => {
        if( password === user.password) {
          this.sharedData.setUser(user);
          return true;
        }
        return false;
    }, err => {
      return false;
    }); */

    
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: [],
      password:[]
    });
  }

  onLogin(username,password){
    console.log(username +' '+ password + '  '+this.user.username+'  '+this.user.password)
    if(this.user.username== username && this.user.password== password ){
        this.sharedData.setUser(this.user);
        //this.location.replaceState('/'); // clears browser history so they can't navigate with back button
        this.router.navigate(['/']);
    }
    else
        this.router.navigate(['/top-rated']);
  }
}
