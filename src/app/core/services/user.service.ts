import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, ReplaySubject } from "rxjs";
import { map, distinctUntilChanged } from "rxjs/operators";

// TODO Сделать бек на авторизацию

@Injectable({
  providedIn: "root"
})
export class UserService {}
