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
  user : User = new User();

  constructor(private sharedData:DataService, private movieService:MovieService, 
    private userService:UserService, private router: Router ) { }

  ngOnInit() {
    this.sharedData.currentUser.subscribe(user=> {
      if(  user.username==''){
      this.router.navigate(['/login']);

      }
      else{
        console.log("i am in router");
        this.setUser();
        this.getTopRated();
        }
      });

    
  }

  public getTopRated(): void {
    this.movieService.getTopRated().subscribe( movies => {
      movies.forEach( movie => {
        this.movies.push( movie );
      });
    });
  }

  public setUser(){
    this.sharedData.currentUser.subscribe( user => {
      this.user = user;
    });
  }

  public addToPlayList(movie:Movie){
    console.log( { from : "AddPlaylistTopRated" , user : this.user , movie});
    this.userService.addToPlaylist(this.user , movie._id);
  }

  public checkMovieInCart(movie:Movie){
    this.user.cart.includes(movie._id);
  }

  public movieDetails(movie:Movie){
    this.router.navigateByUrl('/movie/'+movie._id);
  }

  public canPlay(movie:Movie){
    console.log( { from : "canPlayTopRated", user : this.user , movie});
    movie.level <= this.user.level;
  }
}
