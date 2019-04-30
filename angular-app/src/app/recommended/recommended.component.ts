import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { UserService } from '../services/userServices';
import { MovieService } from '../services/movieServices';
import { Movie } from '../models/movie';
import { User } from '../models/user';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements OnInit {

  
  movies : Movie[] = [];
  cart : Movie[] = [];
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
        this.getRecommended();
        }
      });
  }


  public getRecommended(): void {
    this.sharedData.currentUser.subscribe( user=> {
       this.movieService.getRecommended( user.cart ).subscribe( movies => {
        if( movies['movies'].length == 0 ){

        }else{
          console.log(" heerreeeeeeeeeeeee ");
          movies['movies'].forEach( movie => {
            this.movies.push( movie );
          });
        }
      });
    });
  }

  public setUser(){
    this.sharedData.currentUser.subscribe( user => {
      this.user = user;
      this.user.cart.forEach( movieId => {
        this.movieService.getMovieById( movieId ).subscribe( movie => {
          this.cart.push( movie );
        });
      });
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
