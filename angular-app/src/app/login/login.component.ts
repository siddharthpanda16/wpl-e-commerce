import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserService } from '../services/userServices';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private sharedData:DataService, private userService:UserService) { }

  ngOnInit() {
  }

  validateUser(username:string, password:string) {
    this.userService.getUser(username).subscribe( user => {
        if( password === user.password) {
          this.sharedData.setUser(user);
          return true;
        }
        return false;
    }, err => {
      return false;
    });
  }

}
