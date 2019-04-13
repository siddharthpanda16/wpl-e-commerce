import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements OnInit {

  constructor(private sharedData:DataService,private router:Router) { }

  ngOnInit() {
    this.sharedData.currentUser.subscribe(user=> {
      if(  user.username==''){
      this.router.navigate(['/login']);

      }
      else{
        console.log("i am in router");
          
        }
      });
  }

}
