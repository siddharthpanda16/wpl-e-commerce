import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { DataService} from '../data.service';
import { User} from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  styles:[
    `
    #nav-container ngb-popover-window {
      min-width: auto;
    }
    #nav-container .popover-body{
      
        height: auto !important;
    }
    `
  ]
})
export class NavComponent implements OnInit {

  username:String; 
  user:User;
  
  constructor(private sharedData:DataService, private router:Router ) { }

  ngOnInit() {
    this.sharedData.currentUser.subscribe( user => {
      this.user = user;
      this.username = this.user.username;
    });
  }

  signOut(){
    sessionStorage.removeItem("keyname");
    this.router.navigateByUrl("/login");
  };

}
