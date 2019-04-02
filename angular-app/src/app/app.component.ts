import { Component } from '@angular/core';
import { DataService } from './data.service';
import { MovieService } from './services/movieServices';
import { Movie } from './models/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce';

  private currUserId:string;

  constructor(private sharedData:DataService, private movieService: MovieService){
    // assign currentuserid after login here 
  }

  ngOnInit(){  
   this.movieService.getAllMovies().subscribe( movies => {
     this.sharedData.setMovies(movies);
   })
  }
}
