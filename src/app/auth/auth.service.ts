import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private loaderActive = false;
  loaderSubject: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  getLoader(){
    return this.loaderActive
  }

  toggleLoader() {
    this.loaderActive = !this.loaderActive;
    this.loaderSubject.next(this.loaderActive);
  }
}
