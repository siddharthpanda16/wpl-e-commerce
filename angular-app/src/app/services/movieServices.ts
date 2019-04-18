import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { User } from '../models/user'
import { Movie } from '../models/movie';
import { DataService } from '../data.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class MovieService {

    constructor( private sharedData:DataService, private http: HttpClient ){

    }

    ngOnInit() {}

    addMovie(movie:Movie): Observable<Movie> {
        var url = ('http://localhost:1234/movies'); 
        var options = httpOptions; 

        return this.http.post<Movie>( url, movie, options).pipe(
<<<<<<< HEAD
            tap(resp => console.log('addMovie resp: '+ JSON.stringify(resp) )),
=======
            tap(_ => console.log('added new movie')),
>>>>>>> master
            catchError(this.handleError<Movie>(`addMovie() failed`))
        );
    }

    /* note: oid input parameter unnecessary? */
    /* also, we have an issue with movie._id vs. movie._id.$oid */
    updateMovie(/*oid:String, */ movie:Movie): Observable<Movie> {
        var url = ('http://localhost:1234/movies/{movie_id}').replace(/{movie_id}/g, movie._id); 
        var options = httpOptions; 

        return this.http.put<Movie>( url, movie, options).pipe(
<<<<<<< HEAD
            tap(_ => console.log('fetched claim updateMovie()')),
=======
            tap(_ => console.log('updated movie')),
>>>>>>> master
            catchError(this.handleError<Movie>(`updateMovie() failed`))
        );
    }

    deleteMovie(/*oid:String, */ movie:Movie): Observable<Movie> {
        var url = ('http://localhost:1234/movies/{movie_id}').replace(/{movie_id}/g, movie._id); 
        var options = httpOptions; 

        return this.http.delete<Movie>( url, options).pipe(
            tap(_ => console.log('MovieService.deleteMovie(), fetched claim')),
            catchError(this.handleError<Movie>(`deleteMovie() failed`))
        );
    }

    getMovieById(movieId:string): Observable<Movie>{
        var url = ('http://localhost:1234/movies/{movie_id}').replace(/{movie_id}/g, movieId); 
        var options = httpOptions; 

        return this.http.get<Movie>( url, options).pipe(
<<<<<<< HEAD
            tap(_ => console.log('fetched claim getMovieByID()')),
=======
            tap(_ => console.log('fetched movie')),
>>>>>>> master
            catchError(this.handleError<Movie>(`getMovieById() failed`))
        );
    }

    getAllMovies(): Observable<Movie[]>{
        var url = ('http://localhost:1234/movies'); 
        var options = httpOptions; 

        return this.http.get<Movie[]>( url, options ).pipe(
<<<<<<< HEAD
            tap(_ => console.log('fetched claim getAllMovies()')),
=======
            tap(_ => console.log('fetched all movies')),
>>>>>>> master
            catchError(this.handleError<Movie[]>(`getAllMovies() failed`))
        );
    }

    getTopRated(): Observable<Movie[]>{
        var url = ('http://localhost:1234/movies/top'); 
        var options = httpOptions; 
        
        return this.http.get<Movie[]>( url, options ).pipe(
<<<<<<< HEAD
            tap(_ => console.log('fetched claim getTopRated()')),
=======
            tap(_ => console.log('fetched top rated')),
>>>>>>> master
            catchError(this.handleError<Movie[]>(`getTopRated() failed`))
        );
    }

    getRecent(): Observable<Movie[]>{
        var url = ('http://localhost:1234/movies/recent'); 
        var options = httpOptions; 
        
        return this.http.get<Movie[]>( url, options ).pipe(
<<<<<<< HEAD
            tap(_ => console.log('fetched claim getRecent()')),
=======
            tap(_ => console.log('fetched recent movies')),
>>>>>>> master
            catchError(this.handleError<Movie[]>(`getTopRated() failed`))
        );
    }

    searchMovie(params:Object): Observable<Movie[]> {
        var url = ('http://localhost:1234/movies'); 
        var options = httpOptions; 
        options['params'] = params;

        return this.http.get<Movie[]>( url, options).pipe(
<<<<<<< HEAD
            tap(_ => console.log('fetched claim searchMovies()')),
=======
            tap(_ => console.log('fetched search movie')),
>>>>>>> master
            catchError(this.handleError<Movie[]>(`searchMovie() failed`))
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