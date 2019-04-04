import { Injectable } from '@angular/core';

import { Observable, throwError, of, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { User } from '../models/user'
import { Movie } from '../models/movie';
import { DataService } from '../data.service';
import { stringify } from '@angular/compiler/src/util';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {

    constructor( private sharedData:DataService, private http: HttpClient ){
    }

    ngOnInit() {}

    getUser(username:string): Observable<User> {
        var url = ('localhost:1234/user/{user_id}').replace(/{user_id}/g, username); 
        
        var options = httpOptions; 
        // options['params'] = new HttpParams()
        //     .set('session_id',this.currUserId);

        return this.http.get<User>( url, options).pipe(
            tap(_ => console.log('fetched claim')),
            catchError(this.handleError<User>(`getUserById() failed`))
        );
    }

    validateUser(username:string, password:string) {
      this.getUser(username).subscribe( user => {
          if( password === user.password) {
            this.sharedData.setUser(user);
            return true;
          }
          return false;
      }, err => {
        return false;
      });
    }

    addUser(user:User):Observable<User> {
        var url = ('localhost:1234/users'); 
        var options = httpOptions; 

        return this.http.post<User>( url, user, options).pipe(
            tap(_ => console.log('fetched claim')),
            catchError(this.handleError<User>(`getUserById() failed`))
        );
    }

    updateUser(user:User):Observable<User> {
      var url = ('localhost:1234/users/{user_id}').replace(/{user_id}/g, user._id); 
      var options = httpOptions; 

      return this.http.put<User>( url, user, options).pipe(
          tap(_ => { 
            this.sharedData.setUser(user); 
            console.log('fetched claim');
          }),
          catchError(this.handleError<User>(`getUserById() failed`))
      );
    }

    updatePlaylist(user:User, movieIds:string[]):Observable<User>{
      var url = ('localhost:1234/users/{user_id}').replace(/{user_id}/g,user._id); 
      user.cart = movieIds;
      var options = httpOptions; 

      return this.http.put<User>( url, user, options).pipe(
          tap(_ => {
            console.log('fetched claim');
            this.sharedData.setUser(user);
          }),
          catchError(this.handleError<User>(`getUserById() failed`))
      );
    }

    addToPlaylist(user:User, movieId:string):Observable<boolean>{
      if( user.cart.length === 5 ){
        return new BehaviorSubject<boolean>(false);
      } else {
        user.cart.push(movieId);
        var url = ('localhost:1234/users/{user_id}').replace(/{user_id}/g,user._id);
        var options = httpOptions; 

        return this.http.put<boolean>( url, user, options).pipe(
            tap(_ => {
              console.log('fetched claim');
              this.sharedData.setUser(user);
            }),
            catchError(this.handleError<boolean>(`getUserById() failed`))
        );
      }
    }


    deleteFromPlaylist(user:User, movieId:string):Observable<boolean>{
        // console.log('here2', user);
        if( user.cart.length == 0 ){
          return new BehaviorSubject<boolean>(false);
        } else {
          user.cart = user.cart.filter( function(value){
            return value != movieId;
        });
        // console.log(user);
        var url = ('localhost:1234/users/{user_id}').replace(/{user_id}/g,user._id);
        var options = httpOptions; 

        return this.http.put<boolean>( url, user, options).pipe(
            tap(_ => {
              console.log('fetched claim');
              this.sharedData.setUser(user);
            }),
            catchError(this.handleError<boolean>(`getUserById() failed`))
        );
      }
    }

      /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      //return of(result as T);

      return throwError(
        'There was an error while processing your request. Please try again later.');
    };
  }

}