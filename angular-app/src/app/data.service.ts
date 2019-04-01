import { Injectable } from '@angular/core';
import { User } from './models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private currUser = new BehaviorSubject<User>(new User); 
  currentUser = this.currUser.asObservable();

  private isAdmin = new BehaviorSubject<boolean>(false); 
  currUserIsAdmin = this.isAdmin.asObservable();

  constructor() { }

  setUser(user: User){
    this.currUser.next(user);
  }

  setIsAdmin(isAdmin: boolean){
    this.isAdmin.next(isAdmin);
  }
}
