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

    getUser(userID:string): Observable<User> {
        var url = ('http://localhost:1234/users/{user_id}').replace(/{user_id}/g, userID); 
        var options = httpOptions; 
        // options['params'] = new HttpParams()
        //     .set('session_id',this.currUserId);

        console.log("userService, getUser() " + url);
        

        return this.http.get<User>( url, options).pipe(
            tap(_ => console.log('fetched user')),
            catchError(this.handleError<User>(`getUserById() failed`))

        );
    }
    getSingleUser(username:string): Observable<User> {
      var url = ('http://localhost:1234/users/username/' + username); 
      var options = httpOptions; 
      // options['params'] = new HttpParams()
      //     .set('session_id',this.currUserId);
      console.log("userService, getUser() " + url);
      
      return this.http.get<User>( url,options).pipe(
          tap(_ => console.log('fetched claim')),
          catchError(this.handleError<User>(`fetchUser() failed`))
      );
  }

    validateUser(username:string, password:string):Observable<User> {
      var url = ('http://localhost:1234/login'); 
      var options = httpOptions; 
      console.log("userService, validateUser()" , { username, password})
      let queryParams = {
        'username' : username , 
        'password': password
      };
      return this.http.post<User>( url, queryParams , options ).pipe(
          tap(_ => console.log('validated user')),
          catchError(this.handleError<User>(`validateUser() failed`))
      );
    }

    addUser(user:User):Observable<User> {
        var url = ('http://localhost:1234/users'); 
        var options = httpOptions; 

        return this.http.post<User>( url, user, options).pipe(
            tap(_ => console.log('added user')),
            catchError(this.handleError<User>(`addUser() failed`))
        );
    }

    updateUser(user:User):Observable<User> {
      var url = ('http://localhost:1234/users/{user_id}').replace(/{user_id}/g, user._id); 
      var options = httpOptions; 
      var queryParams = {
        'displayName': user.displayName,
        'username': user.username,
        'level': user.level,
        'cart': user.cart,
        'billing': user.billing
      }
      console.log("userServices, updateuser");
      
      return this.http.put<User>( url, queryParams, options).pipe(
          tap(_ => { 
            //this.sharedData.setUser(user); 
            console.log('updated user');
          }),
          catchError(this.handleError<User>(`updateUser() failed`))
      );
    }

    updatePlaylist(user:User, movieIds:string[]):Observable<User>{
      var url = ('http://localhost:1234/users/{user_id}').replace(/{user_id}/g, user._id); 
      user.cart = movieIds;
      var options = httpOptions; 
      let queryParams = {
        'cart': user.cart
      }

      console.log( "updating playlist " , user , url );
      return this.http.put<User>( url, queryParams, options).pipe(
          tap(_ => {
            console.log('updated playlist');
            this.sharedData.setUser(user);
          }),
          catchError(this.handleError<User>(`updatePlaylist() failed`))
      );
    }

    addToPlaylist(user:User, movieId:string):Observable<boolean>{
      if( user.cart.length === 5 ){
        return new BehaviorSubject<boolean>(false);
      } else {
        user.cart.push(movieId);
        var url = ('http://localhost:1234/users/{user_id}').replace(/{user_id}/g, user._id); 
        var options = httpOptions; 
        let queryParams = {
          'cart': user.cart
        }

        console.log( url , queryParams );
        return this.http.put<boolean>( url, queryParams, options).pipe(
            tap(_ => {
              console.log('added to playlist');
              this.sharedData.setUser(user);
            }),
            catchError(this.handleError<boolean>(`addToPlaylist() failed`))
        );
      }
    }


    deleteFromPlaylist(user:User, movieId:string):Observable<boolean>{
        // console.log('here2', user);
        // if( user.cart.length == 0 ){
        //   return new BehaviorSubject<boolean>(false);
        // } else {
        //   user.cart = user.cart.filter( function(value){
        //     return value != movieId;
        // });
        var url = ('http://localhost:1234/users/{user_id}').replace(/{user_id}/g, user._id); 
        var options = httpOptions; 

        user.cart = user.cart.filter( function(value){
          return value != movieId;
        });
        console.log( {"delete service " : {  user , url }});
        let queryParams = {
          'cart': user.cart
        }

        return this.http.put<boolean>( url, queryParams, options).pipe(
            tap(_ => {
              console.log('deleted from playlist');
              this.sharedData.setUser(user);
            }),
            catchError(this.handleError<boolean>(`deleteFromPlaylist() failed`))
        );
      // }
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