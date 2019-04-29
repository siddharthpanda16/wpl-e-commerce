import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { MovieService } from '../services/movieServices';
import { UserService } from '../services/userServices';
import { Movie } from '../models/movie';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  /* template: `<div class="max-width-1024">
    <div class="embed-responsive embed-responsive-16by9" id="player">
    </div>
  </div>`, */
  styles: [`
    .my-custom-class {
      background: aliceblue;
      font-size: 125%;
    }
    .my-custom-class .arrow::after {
      border-top-color: aliceblue;
    }

    .popover-header{
      color:black;
      font-size: 18px;
      overflow:auto;
      height:35px;
    }

    #home-container ngb-popover-window 
    {
      min-width: 400px;
      left:20px;
    }
    #home-container .popover-body{
      font-size: 14px;
      overflow:auto;
      height:100px;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor(private sharedData: DataService, private movieService: MovieService, private userService: UserService, private formBuilder: FormBuilder, private router: Router) {
    this.createForm();
  }
  isSearched: Boolean = false;
  moviesActual = new Map<string, Movie[]>();
  moviesSearched: Movie[] = [];
  searchForm: FormGroup;
  search: any = {};
  user: User = new User;
  searchFinished: Boolean = false;
  loadComplete: Boolean  = false;

  id = 'FIBeIAA2J9A';
  playerVars = {
    cc_lang_pref: 'en'
  };
  private player;
  private ytEvent;


  ngOnInit() {
    console.log("session: ",sessionStorage.getItem("keyname"));
    if (sessionStorage.getItem("keyname")) {
      this.userService.getUser(sessionStorage.getItem("keyname")).subscribe(user => {
        this.sharedData.setUser(user);
        if (user == null || user.username == '') {
          console.log("No user found");

          this.router.navigate(['/login']);
        }
        else {
          this.user = user;
          console.log({"user":user});
          this.router.navigate(['/']);
        }
      });

      this.isSearched = false;
      this.searchFinished = false;
      this.loadComplete =false;
      this.sortMoviesByGenre();
    }
    else {
      console.log("home, session2:");
      this.router.navigate(['/login']);
    }
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

  sortMoviesByGenre() { 
    this.movieService.getAllMovies().subscribe(async movies => {
      await movies.forEach(movie => {
      var genres = movie["genres"];
      genres.forEach(genre => {
        if (this.moviesActual != null && this.moviesActual.get(genre) != null)
          this.moviesActual.get(genre).push(movie);
        else {
          this.moviesActual.set(genre, new Array(movie));
        }
      });
      })
      this.loadComplete = true;
    });
  }

  public onSubmit(inputVal: string) {
    console.log("search form is submitted");
    console.log("input text  " + inputVal);
    console.log("Genre checkbox " + this.model.genre);
    inputVal  = inputVal.toLowerCase();
    this.searchFinished =false;
    if (inputVal.trim() != "") {
      this.isSearched = true;
      this.moviesSearched = [];

      this.movieService.getAllMovies().subscribe(async movies => {
        await movies.forEach(movie => {
          if (((this.model.title || (!this.model.genre && !this.model.title && !this.model.director)) && movie.Title.toLowerCase().includes(inputVal))
          || (this.model.director && movie.director.toLowerCase().includes(inputVal))) 
          {
            this.moviesSearched.push(movie);
          }
          if(this.model.genre)
          {
          movie.genres.forEach(genre=> {
              if(genre.toLowerCase()==(inputVal))
                this.moviesSearched.push(movie);
            })
          } 
        });
        this.searchFinished =true;
      });
      console.log(this.model.genre, this.model.title, this.model.director)
  }
    else{
      this.isSearched = false;
      this.moviesSearched = [];
    }
  }

  /*
  public onSubmit(inputVal) {
    console.log("form is submitted");
    console.log("input text  " + inputVal);
    console.log("Genre checkbox " + this.model.genre);
    this.isSearched = true;
    this.moviesSearched = [];
    this.movies.forEach(movie => {
      if (movie.Title.toLowerCase().includes(inputVal.toLowerCase() )) {
        this.moviesSearched.push(movie);
      }
    });
  }
  */

  public movieDetails(movie: Movie) {
    console.log("moviedetails home ", movie._id["$oid"]);
    this.router.navigateByUrl('/movie/' + movie._id);
  }

  public canPlay(movie: Movie) {
    return movie.level <= this.user.level;
  }

  public addToPlayList(movie: Movie) {
    this.userService.addToPlaylist(this.user, movie._id, movie.Title).subscribe();
  }
    
  public checkMovieInCart(movie: Movie) {
    return this.user.cart.includes(movie._id);
  }

  public play(movie: Movie) {
    console.log("playing movie ", movie);
    this.router.navigate(["/"]).then(result => { window.location.href = 'http://www.youtube.com/'; });

  }

  public makeUserPremium(){
    this.sharedData.currentUser.subscribe(user=>{
      user.level=3;
      console.log("making payment");
      this.user=user;
    })

    this.userService.updateUser(this.user).subscribe();
    
    /* $('#getPremiumModal').hide();
    $('.modal-backdrop.fade.show').remove(); */
  }

  createForm() {
    this.searchForm = this.formBuilder.group({
      search_input: []
    });
  }

  model = {
    genre: false,
    title: false,
    director: false
  };
}