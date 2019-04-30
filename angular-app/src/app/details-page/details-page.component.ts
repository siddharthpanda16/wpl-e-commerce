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
  id = 'FIBeIAA2J9A';
  playerVars = {
    cc_lang_pref: 'en'
  };
  private player;
  private ytEvent;
  subscription:any;

  constructor(private sharedData:DataService, private movieService:MovieService, 
    private userService:UserService,private route: ActivatedRoute, private router:Router) {

      this.subscription = route.params.subscribe(val => {
        if (sessionStorage.getItem("keyname")) {
          this.sharedData.currentUser.subscribe(user => {
            if (user == null || user.username == '') {
              this.router.navigate(['/login']);
            } else {
              console.log( val );
              this.movieId = val.id;
              this.setUser();
              this.getDetails(this.movieId);
            }
          })
        } else {
          this.router.navigate(['/login']);
        }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  //video player
  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }
  
  pauseVideo() {
    this.player.pauseVideo();
  }

  getDetails(movieId:string){
    this.movieService.getMovieById(movieId).subscribe( movie => {
      this.stars = Math.round(movie.imdb.rating/2);
      this.movie = movie;
      this.similar = [];
      this.sharedData.currentUser.subscribe( user => {
        this.movieService.getRecommended( [movieId] ).subscribe ( movies => {
          if( movies['movies'].length == 0 ){
            // this.movieService.getRecommended([]).subscribe( defmovies => {
            //   defmovies.forEach( movie => {
            //     this.similar.push( movie );
            //   });
            // });
          }else{
            movies['movies'].forEach( movie => {
              this.similar.push( movie );
            });
          }
        });
      });
    });
  }

  movieDetails(simMovie:Movie){
    this.router.navigate([`/movie/${simMovie._id}`]);  
    // this.similar = [];        
    // this.getDetails(simMovie._id);
  }

  makeUserPremium(){
    this.sharedData.currentUser.subscribe(user=>{
      user.level=3;
      console.log("making payment");
      this.user=user;
    })

    this.userService.updateUser(this.user).subscribe();
    
    /* $('#getPremiumModal').hide();
    $('.modal-backdrop.fade.show').remove(); */
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
    this.userService.addToPlaylist(this.user , movie._id, movie.Title).subscribe();
  }

  public getPremium(){

  }


}
