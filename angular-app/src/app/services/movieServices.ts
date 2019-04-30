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
            tap(resp => console.log('addMovie resp: '+ JSON.stringify(resp) )),
            catchError(this.handleError<Movie>(`addMovie() failed`))
        );
    }

    /* note: oid input parameter unnecessary? */
    /* also, we have an issue with movie._id vs. movie._id.$oid */
    updateMovie(/*oid:String, */ movie:Movie): Observable<Movie> {
        var url = ('http://localhost:1234/movies/{movie_id}').replace(/{movie_id}/g, movie._id); 
        var options = httpOptions; 

        return this.http.put<Movie>( url, movie, options).pipe(
            tap(_ => console.log('updated movie')),
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
            tap(_ => console.log('fetched movie, getMovieByID('+movieId+')')),
            catchError(this.handleError<Movie>(`getMovieById() failed`))
        );
    }

    getAllMovies(): Observable<Movie[]>{
        var url = ('http://localhost:1234/movies'); 
        var options = httpOptions; 

        return this.http.get<Movie[]>( url, options ).pipe(
            tap(_ => console.log('fetched all movies, getAllMovies()')),
            catchError(this.handleError<Movie[]>(`getAllMovies() failed`))
        );
    }

    getTopRated(): Observable<Movie[]>{
        var url = ('http://localhost:1234/movies/top'); 
        var options = httpOptions; 
        
        return this.http.get<Movie[]>( url, options ).pipe(
            tap(_ => console.log('fetched top rated, getTopRated()')),
            catchError(this.handleError<Movie[]>(`getTopRated() failed`))
        );
    }

    getRecent(): Observable<Movie[]>{
        var url = ('http://localhost:1234/movies/recent'); 
        var options = httpOptions; 
        
        return this.http.get<Movie[]>( url, options ).pipe(
            tap(_ => console.log('fetched recent movies, getRecent()')),
            catchError(this.handleError<Movie[]>(`getTopRated() failed`))
        );
    }

    getRecommended(movies:string[]): Observable<Movie[]>{
        var url = ('http://localhost:1234/movies/recommend'); 
        var options = httpOptions; 
        let queryParams = {
            cart : movies
        }

        console.log( {queryParams} ) ;
        return this.http.post<Movie[]>( url, queryParams, options ).pipe(
            tap(_ => console.log('fetched recommended movies')),
            catchError(this.handleError<Movie[]>(`getRecommended() failed`))
        );
    }

    searchMovie(params:Object): Observable<{movies : Movie[]}> {
        var url = ('http://localhost:1234/movies'); 
        var options = httpOptions; 
        options['params'] = params;

        return this.http.get<{movies : Movie[]}>( url, options).pipe(
            tap(_ => console.log('fetched search movie, searchMovies()')),
            catchError(this.handleError<{movies : Movie[]}>(`searchMovie() failed`))
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