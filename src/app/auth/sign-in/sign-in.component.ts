import { Component, OnInit } from "@angular/core";
import { UserService } from "../../core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["../auth.component.scss"]
})
export class SignInComponent implements OnInit {
  constructor(
    private _userService: UserService,
    private _router: Router,
    private _authService: AuthService
  ) {}

  ngOnInit() {}

  submit() {
    this._authService.toggleLoader();
    setTimeout(() => {
      this._authService.toggleLoader();
      this._router.navigate([""]);
    }, 3000);
  }
}
