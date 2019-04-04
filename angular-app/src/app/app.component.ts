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

  constructor(private sharedData:DataService, private movieService: MovieService){
    // assign currentuserid after login here 
  }

  ngOnInit(){  
     this.movieService.getAllMovies().subscribe( movies => {
       this.sharedData.setMovies(movies);
     });
    // let movies:Movie[] = []
    // let m1 = new Movie(); m1._id = "movieid1"; m1.Title="Demo Movie 1"; m1.level = 1; movies.push( m1 );
    // let m2 = new Movie(); m2._id = "2"; m2.Title="Demo Movie 2"; m2.level = 1; movies.push( m2 );
    // let m3 = new Movie(); m3._id = "3"; m3.Title="Demo Movie 3"; m2.level = 2; movies.push( m3);
    // let m4 = new Movie(); m4._id = "4"; m4.Title="Demo Movie 4"; m2.level = 3; movies.push( m4);
    // this.sharedData.setMovies(movies);

  }
}
