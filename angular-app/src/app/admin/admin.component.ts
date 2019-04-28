import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Movie } from '../models/movie';
import { Router } from "@angular/router";
import { DataService } from '../data.service';
import { UserService } from '../services/userServices';
import { MovieService } from '../services/movieServices';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private sharedData: DataService, private movieService: MovieService, private userService: UserService, private formBuilder: FormBuilder, private router: Router) {
    this.selectedMovie = new Movie();
    this.selectedMovie._id = null;
  }

  user: User = new User;
  moviesSearched: Movie[] = [];
  movies: Movie[];
  selectedUser: User = new User();
  selectedMovie:Movie;
  
  manageUsers:Boolean = false;
  manageModeUpdate:Boolean = true;
  manageTargetSwitchText:string = "Switch to Manage Users";
  manageModeSwitchText:string = "Switch to Add Mode";
  
  manageTarget:string = "Manage Movies";
  manageMode:string = "Update";
  
  
  searchPlaceHolder:string = "Movie Title";

  ngOnInit() {
    console.log("admin session: ");
    this.sharedData.currentUser.subscribe(user => {
      console.log("admin page, oninit, current user:" + user.username);
      this.user = user;
      // redirect if non-admin try to access this page
      if (user == null || !(user.isAdmin) ) {
        this.router.navigate(['/']);
      }
      else {
        //this.router.navigate(['/admin']);
      }


      this.movieService.getAllMovies().subscribe(movieList => {
        this.movies = movieList;
        this.moviesSearched = movieList;
      });


    });

  }

  selectMovieForm: FormGroup = new FormGroup({
    selectMovie: new FormControl()  
  }
  );
  
  /*
  movieDetailsForm: FormGroup = new FormGroup({
    _id: new FormControl()

  });
  */
  
  manageTargetSwitch()
  {
    if (this.manageUsers)
    {
      /* currently managing users, switch to managing movies */
      this.manageUsers = false;
      this.manageTargetSwitchText = "Switch to Manage Users";
      this.searchPlaceHolder = "Movie Title";
      this.manageTarget = "Manage Movies";
    }
    else
    {
      /* currently managing movies, switch to managing users */
      /* we are not using admin to add a new user, so have to switch the manageMode to update also */
      if (!this.manageModeUpdate)
      {
        this.manageModeSwitch();
      }

      this.manageUsers = true;
      this.manageTargetSwitchText = "Switch to Manage Movies";
      this.searchPlaceHolder = "Username";
      this.manageTarget = "Manage Users";
    }
  }

  manageModeSwitch()
  {
    /* we are not using admin to add a new user, so only add new movies */
    if (!this.manageUsers)
    {
      if (this.manageModeUpdate)
      {
        this.manageModeUpdate = false;
        this.manageMode = "Add";
        this.manageModeSwitchText = "Switch to Update Mode";
        
        /* clear selected movie */
        this.selectedMovie = new Movie();
        /* setting _id or _id.$oid to null to let the DB auto generate an id */
        this.selectedMovie._id = null;
      }
      else
      {
        this.manageModeUpdate = true;
        this.manageMode = "Update";
        this.manageModeSwitchText = "Switch to Add Mode";
      }
    }
    
  }

  onSelect(movie:Movie){
    console.log("selected == " + movie.Title);
    /* get all properties of a Movie object*/
    var aMovie:Movie = new Movie();
    var props = Object.keys(aMovie);
    
    /* check if the value of a prop is null, if null, fill with empty string array, this ensures it will not break the run */
    props.forEach(  prop => {
      if (movie[prop] != null)
      {
        this.selectedMovie[prop] = movie[prop];
      }
      else
      {
        this.selectedMovie[prop] = aMovie[prop];
      }
      
      console.log("selected movie." + prop + " == " + this.selectedMovie[prop]);
    });

  }

  onSearch(searchInput) {
    if (this.manageUsers)
    /* search user */
    {
      this.userService.getSingleUser(searchInput).subscribe(user => {
        
        console.log("admin, search user");
        //console.log(user);
        //console.log(JSON.stringify(user) );
        this.selectedUser = user;
        console.log("user: " + stringify(user._id) );
      });
    }
    else
    /* search movie */
    {
      console.log("admin, search movie");
      this.moviesSearched = [];
      this.movies.forEach(movie => {
        if (movie.Title.toLowerCase().includes(searchInput.toLowerCase() )) {
          this.moviesSearched.push(movie);
        }
      });
    }
  }

  checkNull( input ) {
    
    var emptyArr:string[] = new Array<string>();
    if (input === null || input == "" )
    {
      return emptyArr;
    }
    
    return input;
  }

  
  onManageMovie(updatedMovie:Movie){
    if (!this.manageUsers)
    /* just need to check to make sure we are in the right place */
    {
      if(this.manageModeUpdate)
      /* update mode */
      {
        this.movieService.updateMovie(this.selectedMovie).subscribe(movie => {
          console.log("admin.onManageMovie.update() success: " + JSON.stringify(movie) );
        });
      }
      else
      /* add mode */
      {
        this.movieService.addMovie(this.selectedMovie).subscribe(movie => {
          console.log("admin.onManageMovie.add() success: " + JSON.stringify(movie) );
        });
        this.selectedMovie = new Movie();
        /*
        this.selectedMovie._id = null;
        */
      }

    }
    
    /* refresh movie list */
    this.movieService.getAllMovies().subscribe(movieList => {
      this.movies = movieList;
      this.moviesSearched = movieList;
    });

  }

  onDeleteMovie(deletedMovie:Movie){
    if (!this.manageUsers)
    /* need to check to make sure we are in the right place */
    {
      if(this.manageModeUpdate)
      {
        console.log("admin, ondeletemovie: " + deletedMovie._id + ", " + deletedMovie.Title);
        this.movieService.deleteMovie(this.selectedMovie).subscribe(resp =>
          {
            console.log("admin, delete movie, response: " + JSON.stringify(resp) );
          }

        );
      }

    }

    this.movieService.getAllMovies().subscribe(movieList => {
      this.movies = movieList;
      this.moviesSearched = movieList;
    });

  }
  

  onManageUser(updatedUser:User){
    if(this.manageUsers)
    {
      if(this.manageModeUpdate)
      {
        console.log("admin, onmanageuser: " + updatedUser._id + ", " + updatedUser.username);
        
        this.userService.updateUser(updatedUser).subscribe(resp => {
          console.log("admin, update user, response: " + JSON.stringify(resp) );
        });
      }
    }
  }
  
}
