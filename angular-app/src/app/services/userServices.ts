import { Injectable } from '@angular/core';

import { Observable, throwError, of } from 'rxjs';
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

    // private currUser:User;
    constructor( private sharedData:DataService, private http: HttpClient ){
        // this.sharedData.currentUser.subscribe(userId =>{
        //     this.currUser = userId;
        // })
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

    addUser(user:User):Observable<User> {
        var url = ('localhost:1234/users'); 
        var options = httpOptions; 

        return this.http.post<User>( url, user, options).pipe(
            tap(_ => console.log('fetched claim')),
            catchError(this.handleError<User>(`getUserById() failed`))
        );
    }

    updateUser(user:User):Observable<User> {
        var url = ('localhost:1234/users/{user_id}').replace(/{user_id}/g, user.id); 
        var options = httpOptions; 

        return this.http.put<User>( url, user, options).pipe(
            tap(_ => console.log('fetched claim')),
            catchError(this.handleError<User>(`getUserById() failed`))
        );
    }

    updateCart(user:User, movieIds:string[]):Observable<User>{
        var url = ('localhost:1234/users/{user_id}').replace(/{user_id}/g,user.id); 
        user.cart = movieIds;
        var options = httpOptions; 

        return this.http.put<User>( url, user, options).pipe(
            tap(_ => console.log('fetched claim')),
            catchError(this.handleError<User>(`getUserById() failed`))
        );
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