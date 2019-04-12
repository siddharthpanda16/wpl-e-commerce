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
    console.log("session: ");
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
    this.movies.forEach(movie => {
      var genres = movie["genres"];
      genres.forEach(genre => {
        if (this.moviesActual != null && this.moviesActual.get(genre) != null)
          this.moviesActual.get(genre).push(movie);
        else {
          this.moviesActual.set(genre, new Array(movie));
        }
      });

    }
    );
  }

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

    let u1 = new User(); u1.username = "searched";
    console.log(u1);
    // this.sharedData.currentUser =  u1;
    this.sharedData.setUser(u1);
    console.log(this.sharedData.currentUser);

  }

  // weird behavior?! This function's name is Details, but need to be called as movieDetails()
  public Details(movie: Movie) {
    console.log("moviedetails home ", movie._id["$oid"]);

    this.router.navigateByUrl('/movie/' + movie._id["$oid"]);
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
  movies: Array<Movie> = [
    {
      "Title": "Toy Story",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg",
      "_id": { "$oid": "5b107bec1d2952d0da904823" },
      "actors": ["Tom Hanks", "Tim Allen", "Don Rickles", "Jim Varney"],
      "awards": {
        "wins": 22.0,
        "nominations": 17.0,
        "text": "Nominated for 3 Oscars. Another 22 wins & 17 nominations."
      },
      "countries": ["USA"],
      "director": "John Lasseter",
      "genres": ["Animation", "Adventure", "Comedy"],
      "imdb": { "rating": 8.3, "votes": 574251.0, "id": "tt0114709" },
      "metacritic": 92.0,
      "plot": "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
      "rated": "G",
      "runtime": 81.0,
      "tomato": {
        "rating": 9.0,
        "userReviews": 1104709.0,
        "userMeter": 92.0,
        "image": "certified",
        "meter": 100.0,
        "reviews": 78.0,
        "userRating": 3.7,
        "fresh": 78.0,
        "consensus": "Entertaining as it is innovative, Toy Story reinvigorated animation while heralding the arrival of Pixar as a family-friendly force to be reckoned with."
      },
      "type": "movie",
      "writers": [
        "John Lasseter",
        "Pete Docter",
        "Andrew Stanton",
        "Joe Ranft",
        "Joss Whedon",
        "Andrew Stanton",
        "Joel Cohen",
        "Alec Sokolow"
      ],
      "year": 1995,
      "level": 2
    },
    {
      "Title": "Cutthroat Island",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDg2YTI0YmQtYzgwMi00Zjk4LWJkZjgtYjg0ZDE2ODUzY2RlL2ltYWdlXkEyXkFqcGdeQXVyNjQzNDI3NzY@._V1_UX182_CR0,0,182,268_AL_.jpg",
      "_id": { "$oid": "5b107bec1d2952d0da9047a3" },
      "actors": ["Geena Davis", "Matthew Modine", "Frank Langella", "Maury Chaykin"],
      "awards": { "wins": 0.0, "nominations": 1.0, "text": "1 nomination." },
      "countries": ["USA", "France", "Italy", "Germany"],
      "director": "Renny Harlin",
      "genres": ["Action", "Adventure", "Comedy"],
      "imdb": { "rating": 5.6, "votes": 20312.0, "id": "tt0112760" },
      "metacritic": null,
      "plot": "A female pirate and her companion race against their rivals to find a hidden island that contains a fabulous treasure.",
      "rated": "PG-13",
      "runtime": 124.0,
      "tomato": null,
      "type": "movie",
      "writers": [
        "Michael Frost Beckner",
        "James Gorman",
        "Bruce A. Evans",
        "Raynold Gideon",
        "Robert King",
        "Marc Norman"
      ],
      "year": 1995,
      "level": 2
    },
    {
      "Title": "The City of Lost Children",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZGQxZDMwYzYtYmFjNi00NWYyLThjZjAtMDJhODZhYTkyZDNhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR7,0,182,268_AL_.jpg",
      "_id": { "$oid": "5b107bec1d2952d0da9047c2" },
      "actors": ["Ron Perlman", "Daniel Emilfork", "Judith Vittet", "Dominique Pinon"],
      "awards": { "wins": 2.0, "nominations": 11.0, "text": "2 wins & 11 nominations." },
      "countries": ["France", "Germany", "Spain"],
      "director": "Marc Caro, Jean-Pierre Jeunet",
      "genres": ["Fantasy", "Sci-Fi"],
      "imdb": { "rating": 7.7, "votes": 53962.0, "id": "tt0112682" },
      "metacritic": 73.0,
      "plot": "A scientist in a surrealist society kidnaps children to steal their dreams, hoping that they slow his aging process.",
      "rated": "R",
      "runtime": 112.0,
      "tomato": {
        "rating": 7.0,
        "userReviews": 65391.0,
        "userMeter": 90.0,
        "image": "certified",
        "meter": 79.0,
        "reviews": 53.0,
        "userRating": 4.0,
        "fresh": 42.0,
        "consensus": "Not all of its many intriguing ideas are developed, but The City of Lost Children is an engrossing, disturbing, profoundly memorable experience."
      },
      "type": "movie",
      "writers": [
        "Gilles Adrien",
        "Jean-Pierre Jeunet",
        "Marc Caro",
        "Gilles Adrien",
        "Guillaume Laurant",
        "Jean-Pierre Jeunet"
      ],
      "year": 1995,
      "level": 2
    },
    {
      "Title": "Il Postino: The Postman",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5NDI4NjQyOV5BMl5BanBnXkFtZTYwODI1NDE5._V1_UY268_CR3,0,182,268_AL_.jpg",
      "_id": { "$oid": "5b107bec1d2952d0da904b75" },
      "actors": ["Philippe Noiret", "Massimo Troisi", "Maria Grazia Cucinotta", "Renato Scarpa"],
      "awards": { "wins": 28.0, "nominations": 17.0, "text": "Won 1 Oscar. Another 28 wins & 17 nominations." },
      "countries": ["Italy", "France", "Belgium"],
      "director": "Michael Radford",
      "genres": ["Biography", "Comedy", "Drama"],
      "imdb": { "rating": 7.8, "votes": 24972.0, "id": "tt0110877" },
      "metacritic": 81.0,
      "plot": "Simple Italian postman learns to love poetry while delivering mail to a famous poet; he uses this to woo local beauty Beatrice.",
      "rated": "PG",
      "runtime": 108.0,
      "tomato": {
        "rating": 8.0,
        "userReviews": 20949.0,
        "userMeter": 94.0,
        "image": "fresh",
        "meter": 93.0,
        "reviews": 28.0,
        "userRating": 4.1,
        "fresh": 26.0,
        "consensus": null
      },
      "type": "movie",
      "writers": [
        "Antonio Sk\u00e1rmeta",
        "Furio Scarpelli",
        "Giacomo Scarpelli",
        "Anna Pavignano",
        "Michael Radford",
        "Furio Scarpelli",
        "Giacomo Scarpelli",
        "Massimo Troisi"
      ],
      "year": 1994,
      "level": 2
    },
    {
      "Title": "Don't Be a Menace to South Central While Drinking Your Juice in the Hood",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BY2NmM2M2MWItNjdlMC00ZWI3LTkwODUtZDNkYWZjYjgzZjY3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
      "_id": { "$oid": "5b107bec1d2952d0da904dfa" },
      "actors": ["Shawn Wayans", "Marlon Wayans", "Tracey Cherelle Jones", "Chris Spencer"],
      "awards": { "wins": 0.0, "nominations": 1.0, "text": "1 nomination." },
      "countries": ["USA"],
      "director": "Paris Barclay",
      "genres": ["Comedy", "Crime"],
      "imdb": { "rating": 6.6, "votes": 36103.0, "id": "tt0116126" },
      "metacritic": null,
      "plot": "\"Don't Be a Menace to South Central While Drinking your Juice in the Hood\" is a parody of several U.S. films about being in the 'Hood', for instance \"Boyz n the Hood\", \"South Central\", \"...",
      "rated": "R",
      "runtime": 89.0,
      "tomato": null,
      "type": "movie",
      "writers": ["Shawn Wayans", "Marlon Wayans", "Phil Beauman"],
      "year": 1996,
      "level": 1
    },
    {
      "Title": "La Haine",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDNiOTA5YjktY2Q0Ni00ODgzLWE5MWItNGExOWRlYjY2MjBlXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
      "_id": { "$oid": "5b107bec1d2952d0da904bd9" },
      "actors": ["Vincent Cassel", "Hubert Kound\u00e9", "Sa\u00efd Taghmaoui", "Abdel Ahmed Ghili"],
      "awards": { "wins": 8.0, "nominations": 13.0, "text": "8 wins & 13 nominations." },
      "countries": ["France"],
      "director": "Mathieu Kassovitz",
      "genres": ["Crime", "Drama"],
      "imdb": { "rating": 8.1, "votes": 95280.0, "id": "tt0113247" },
      "metacritic": null,
      "plot": "24 hours in the lives of three young men in the French suburbs the day after a violent riot.",
      "rated": "NOT RATED",
      "runtime": 98.0,
      "tomato": null,
      "type": "movie",
      "writers": ["Mathieu Kassovitz"],
      "year": 1995,
      "level": 3
    },
    {
      "Title": "Muppet Treasure Island",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY0NDU1MDYxMl5BMl5BanBnXkFtZTcwNjgyMTEzMQ@@._V1_UY268_CR3,0,182,268_AL_.jpg",
      "_id": { "$oid": "5b107bec1d2952d0da9047a4" },
      "actors": ["Tim Curry", "Billy Connolly", "Jennifer Saunders", "Kevin Bishop"],
      "awards": { "wins": 0.0, "nominations": 4.0, "text": "4 nominations." },
      "countries": ["USA"],
      "director": "Brian Henson",
      "genres": ["Action", "Adventure", "Comedy"],
      "imdb": { "rating": 6.9, "votes": 15096.0, "id": "tt0117110" },
      "metacritic": null,
      "plot": "The Muppets' twist on the classic tale.",
      "rated": "G",
      "runtime": 99.0,
      "tomato": null,
      "type": "movie",
      "writers": ["Robert Louis Stevenson", "Jerry Juhl", "Kirk R. Thatcher", "James V. Hart"],
      "year": 1996,
      "level": 3
    },
    {
      "Title": "Belle de Jour",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjhjYWVjZWItZmE3OS00ZTNmLWJhYTktZGM1YWZiNDgxNTU2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR4,0,182,268_AL_.jpg",
      "_id": { "$oid": "5b107bec1d2952d0da9048f5" },
      "actors": ["Catherine Deneuve", "Jean Sorel", "Michel Piccoli", "Genevi\u00e8ve Page"],
      "awards": {
        "wins": 5.0,
        "nominations": 2.0,
        "text": "Nominated for 1 BAFTA Film Award. Another 5 wins & 2 nominations."
      },
      "countries": ["France", "Italy"],
      "director": "Luis Bu\u00f1uel",
      "genres": ["Drama"],
      "imdb": { "rating": 7.8, "votes": 27653.0, "id": "tt0061395" },
      "metacritic": null,
      "plot": "A frigid young housewife decides to spend her midweek afternoons as a prostitute.",
      "rated": "APPROVED",
      "runtime": 101.0,
      "tomato": null,
      "type": "movie",
      "writers": ["Joseph Kessel", "Luis Bu\u00f1uel", "Jean-Claude Carri\u00e8re"],
      "year": 1967,
      "level": 1
    }];

}