import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserService } from '../services/userServices';
import { MovieService } from '../services/movieServices';
import { Movie } from '../models/movie';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {

  movies : Movie[] = [];
  constructor(private sharedData:DataService, private movieService:MovieService, 
    private userService:UserService, private router: Router ) { }

  ngOnInit() {
    this.getTopRated();
  }

  public getTopRated(): void {
    // this.movieService.getTopRated().subscribe( movies => {
    //   movies.forEach( movie => {
    //     this.movies.push( movie );
    //   });
    // });
    this.sharedData.allMovies.subscribe( movies => {
      movies.forEach(element => {
        this.movies.push( element );
      });
    });
  }

  public getUser(callback){
    this.sharedData.currentUser.subscribe( user => {
      callback(user);
    });
  }

  public addToPlayList(movie:Movie){
    this.sharedData.currentUser.subscribe( user => {
      this.userService.addToPlaylist(user , movie._id);
    });
  }

  public checkMovieInCart(movie:Movie){
    this.sharedData.currentUser.subscribe( user => {
      console.log( user._id , movie._id, user.cart.includes(movie._id));
      return user.cart.includes(movie._id);
    }, err => {
      console.log("no cart");
      return false;
    });
  }

  public movieDetails(movie:Movie){
    this.router.navigateByUrl('/movie/'+movie._id);
  }

  public canPlay(movie:Movie){
    // this.getUser( (user) => {
    //   console.log( user.plan , movie.level, movie.level <= user.plan );
    //   return movie.level <= user.plan;
    // });

    this.sharedData.currentUser.subscribe( user => {
      console.log( user.plan , movie.level, movie.level <= user.plan );
      return movie.level <= user.plan;
    }, err => {
      console.log(" no current user");
      return false;
    });
  }

}
