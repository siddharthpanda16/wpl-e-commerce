import { Injectable } from '@angular/core';
import { User } from './models/user';
import { BehaviorSubject } from 'rxjs';
import { Movie }  from './models/movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private currUser : User; 
  // currentUser : User;

  private isAdmin = new BehaviorSubject<boolean>(false); 
  currUserIsAdmin = this.isAdmin.asObservable();

  private currUser = new BehaviorSubject<User>(new User()); 
  currentUser = this.currUser.asObservable();

  private movies = new BehaviorSubject<Movie[]>(null); 
  allMovies = this.movies.asObservable();
  

  constructor() { }

  setUser(user: User){
    // this.currUser= user;
    // this.currentUser = this.currUser;
    this.currUser.next(user);
  }

  setIsAdmin(isAdmin: boolean){
    this.isAdmin.next(isAdmin);
  }

  setMovies(movies: Movie[]){
    this.movies.next(movies);
  }
}
