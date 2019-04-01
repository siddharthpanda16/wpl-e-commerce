import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserService } from '../services/userServices';
import { MovieService } from '../services/movieServices';
import { Movie } from '../models/movie';
import { User } from '../models/user';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  constructor(private sharedData:DataService, private movieService:MovieService ) { }

  movies : Movie[];

  ngOnInit() {
    this.getPlaylist();
  }

  public getPlaylist(): void {
    this.sharedData.currentUser.subscribe( currentUser => {
      var playlist = currentUser.cart;
      playlist.forEach( movieId => {
        this.movieService.getMovieById(movieId).subscribe( movie => {
          this.movies.push( movie );
        })
      });
    });
  }

}
