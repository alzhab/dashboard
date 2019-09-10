import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "./user.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService {
  constructor(public _userService: UserService, public router: Router) {}

  canActivate() {
    if (!this._userService.getIsAuthenticated()) {
      this.router.navigate([""]);
      return false;
    }
    return true;
  }
}
