import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { MovieService } from '../services/movieServices';
import { UserService } from '../services/userServices';
import { Movie } from '../models/movie';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { HttpRequest, HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,

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

  ngOnInit() {
<<<<<<< HEAD
    console.log("session: ");
=======

>>>>>>> master
    if (sessionStorage.getItem("keyname")) {
      console.log("home, session: " + sessionStorage.getItem("keyname"));
      this.userService.getUser(sessionStorage.getItem("keyname")).subscribe(user => this.sharedData.setUser(user));
      this.sharedData.currentUser.subscribe(user => {
        if (user == null || user.username == '') {
          this.router.navigate(['/login']);
        }
        else {
          this.router.navigate(['/']);
          this.sortMoviesByGenre();
          this.user = user;
        }
      });
    }
    else {
      console.log("home, session2:");
      this.router.navigate(['/login']);
    }



  }

  sortMoviesByGenre() { // transform data here 
    /* this.sharedData.allMovies.subscribe( movies => {
        movies.forEach( movie => {
          var genres = movie.genres;
          genres.forEach( genre => {
            // add to moviesActual
          });
        });
    }); */
    this.movieService.getAllMovies().subscribe(movies => {
      movies.forEach(movie => {
        var genres = movie["genres"];
        genres.forEach(genre => {
          if (this.moviesActual != null && this.moviesActual.get(genre) != null)
            this.moviesActual.get(genre).push(movie);
          else {
            this.moviesActual.set(genre, new Array(movie));
          }
        });
      })
    });
  }

  onSubmit(inputVal: string) {
    if (inputVal.trim() != "") {
      this.isSearched = true;
      this.moviesSearched = [];

      this.movieService.getAllMovies().subscribe(movies => {
        movies.forEach(movie => {
          if (((this.model.title || (!this.model.genre && !this.model.title && !this.model.director)) && movie.Title.toLowerCase().includes(inputVal))
          || (this.model.director && movie.director.toLowerCase().includes(inputVal))) {
            this.moviesSearched.push(movie);
          }
          if(this.model.genre)
            movie.genres.forEach(genre=> {
              if(genre.toLowerCase()==(inputVal))
                this.moviesSearched.push(movie);
            }) 
        });
      });
      console.log(this.model.genre, this.model.title, this.model.director)
    }
    else{
      this.isSearched = false;
      this.moviesSearched = [];
    }
  }

<<<<<<< HEAD
  onSubmit(inputVal) {
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
=======
  public movieDetails(movie: Movie) {
    this.router.navigateByUrl('/movie/' + movie._id);
  }
>>>>>>> master

  public canPlay(movie: Movie) {
    return movie.level <= this.user.level;
  }

  public addToPlayList(movie: Movie) {
    this.userService.addToPlaylist(this.user, movie._id).subscribe();
  }

<<<<<<< HEAD
  // weird behavior?! This function's name is Details, but need to be called as movieDetails()
  public Details(movie: Movie) {
    console.log("moviedetails home ", movie._id["$oid"]);
=======
  public checkMovieInCart(movie: Movie) {
    return this.user.cart.includes(movie._id);
  }

  public play(movie: Movie) {
    console.log("playing movie ", movie);
    this.router.navigate(["/"]).then(result => { window.location.href = 'http://www.cnn.com/'; });
>>>>>>> master

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