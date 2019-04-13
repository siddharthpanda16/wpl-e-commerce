import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserService } from '../services/userServices';
import { MovieService } from '../services/movieServices';
import { Movie } from '../models/movie';
import { User } from '../models/user';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  movieId:string = "";
  movie:Movie = new Movie();
  similar:Movie[] = []
  stars:number = 0;
  user:User = new User();

  constructor(private sharedData:DataService, private movieService:MovieService, 
    private userService:UserService,private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    console.log("in deatils");
    if (sessionStorage.getItem("keyname")) {
      // this.userService.getUser(sessionStorage.getItem("keyname")).subscribe(user => this.sharedData.setUser(user));
      this.sharedData.currentUser.subscribe(user => {
        if (user == null || user.username == '') {
          this.router.navigate(['/login']);
        }
        else {
          this.router.navigate([`/movie/${this.route.snapshot.paramMap.get("id")}`]);
          this.movieId = this.route.snapshot.paramMap.get("id");
          // this.route.paramMap.subscribe(params => {
          //   this.movieId = params.get("id")
          // });
          this.setUser();
          console.log( 'username' , this.user.username );
          this.getDetails(this.movieId);
        }
      });
    }
    else {
      this.router.navigate(['/login']);
    }
   
  }

  getDetails(movieId:string){
    this.movieService.getMovieById(movieId).subscribe( movie => {
      this.stars = Math.round(movie.imdb.rating/2);
      this.movie = movie;
    });
    // this.similar.push(new Movie());
    // this.similar.push(new Movie());
    // this.similar.push(new Movie());
    // this.similar.push(new Movie());
    // this.similar.push(new Movie());
    // this.similar.push(new Movie());
    // this.similar.push(new Movie());
    // this.similar.push(new Movie());
    // this.similar.push(new Movie());
    // this.similar.push(new Movie());
    // this.similar.push(new Movie());
    // this.similar.push(new Movie());
    // this.similar.push(new Movie());
    // this.similar.push(new Movie());
    // this.similar.push(new Movie());
    // this.similar.push(new Movie());
    // this.similar.push(new Movie());
    // this.similar.push(new Movie());
    // this.stars = Math.round(this.movie.imdb.rating/2);

  }

  public setUser(){
    this.sharedData.currentUser.subscribe( user => {
      this.user = user;
    });
  }

  public alreadyInCart(){
    return this.user.cart.includes( this.movieId );
  }

  public canPlay(){
    return this.user.level >= this.movie.level;
  }

  public addToPlayList(movie:Movie){
    console.log( { from : "AddPlaylistMovieDetails" , user : this.user , movie});
    this.userService.addToPlaylist(this.user , movie._id);
  }

  public getPremium(){

  }


}
