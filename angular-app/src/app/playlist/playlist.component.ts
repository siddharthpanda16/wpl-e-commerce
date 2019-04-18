import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserService } from '../services/userServices';
import { MovieService } from '../services/movieServices';
import { Movie } from '../models/movie';
import { User } from '../models/user';
import {CdkDragDrop, moveItemInArray, DragDropModule} from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  user : User = new User();
  movies : Movie[] = [];
  ids = [];
  saveDisabled :Boolean = true;

  constructor(private sharedData:DataService, private movieService:MovieService,
     private userService:UserService, private router: Router ) { }

  ngOnInit() {
    if (sessionStorage.getItem("keyname")) {
      //this.userService.getUser(sessionStorage.getItem("keyname")).subscribe(user => this.sharedData.setUser(user));
      this.sharedData.currentUser.subscribe(user=> {
        if(  user && user.username==''){
          this.router.navigate(['/login']);
        }
        else{
            console.log( "here" );
            this.router.navigate(['/playlist']);
            this.setUser();
            this.getPlaylist();
          }
        });
    }else{
      this.router.navigate(['/login']);
    }
  }

  public getPlaylist(): void {
    console.log( "here2" );
    this.sharedData.currentUser.subscribe( currentUser => {
      this.user = currentUser;
      var playlist = this.user.cart;
      playlist.forEach( movieId => {
        if( !this.ids.includes( movieId) ) {
          this.movieService.getMovieById(movieId).subscribe( movie => {
              this.movies.push( movie );
              this.ids.push(movieId);
          });
        }
      });
    });
  }

  public setUser(){
    this.sharedData.currentUser.subscribe( user => {
      this.user = user;
    });
  }
  
  public drop(event: CdkDragDrop<string[]>) {
    this.saveDisabled = null;
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  public updateCart(){
    this.saveDisabled = true;
    let movieIds:string[] = [];
    this.movies.forEach(movie => {
      movieIds.push(movie._id);
    }); 
    this.userService.updatePlaylist(this.user, movieIds).subscribe( res => {
    });
  }

  public movieDetails(movie:Movie){
    this.router.navigateByUrl('/movie/'+movie._id);
  }

  public canPlay(movie:Movie){
    return this.user.level >= movie.level;
  }

  public removeFromPlaylist(movie:Movie){
    this.userService.deleteFromPlaylist(this.user, movie._id).subscribe( res => {
      this.movies = this.movies.filter( function(value){
        return value._id != movie._id;
      });
    });
    
  }

  public play(){
    
  }
}
