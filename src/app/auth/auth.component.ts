import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
// TODO: Доделать все страницы равторизации: Регистрация, Забыл пароль, Восстановление пароля
@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent {
  private loaderActive;

  constructor(private _authService: AuthService) {
    this.loaderActive = this._authService.getLoader();
    this._authService.loaderSubject.subscribe(value => {
      this.loaderActive = value;
    });
  }
}
