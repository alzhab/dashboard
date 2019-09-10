import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, ReplaySubject } from "rxjs";
import { map, distinctUntilChanged } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private currentUserSubject = new BehaviorSubject({});
  public currentUser = this.currentUserSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  private isAuthenticated = false;

  constructor() {}

  setAuth(user) {
    this.currentUser = user;
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticated = true;
  }

  getIsAuthenticated() {
    return this.isAuthenticated;
  }

  getCurrentUser() {
    return this.currentUserSubject.value;
  }
}
