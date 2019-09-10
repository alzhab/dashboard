import { Component, OnInit } from "@angular/core";
import { UserService } from "../../core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["../auth.component.scss"]
})
export class SignInComponent implements OnInit {
  constructor(private _userService: UserService, private _router: Router) {}

  ngOnInit() {}

  submit() {
    this._router.navigate([""]);
  }
}
