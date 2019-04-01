import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce';

  private currUserId:string;

  constructor(private sharedData:DataService){
    // assign currentuserid after login here 
  }

  ngOnInit(){
    
  }
}
