import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { DataService} from '../data.service';
import { User} from '../models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  styles:[
    `
    ngb-popover-window {
      min-width: auto;
    }
    .popover-body {
      height: auto
    `
  ]
})
export class NavComponent implements OnInit {

  username:String; 
  user:User;
  
  constructor(private sharedData:DataService ) { }

  ngOnInit() {
    this.sharedData.currentUser.subscribe( user => {
      this.user = user;
      this.username = this.user.username;
    });
  }


}
