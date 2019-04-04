import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserService } from '../services/userServices';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private sharedData:DataService, private userService:UserService) { }

  ngOnInit() {
    this.sharedData.setUser( new User() );
  }

}
