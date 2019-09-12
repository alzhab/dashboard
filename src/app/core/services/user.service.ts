import { Injectable } from "@angular/core";
import { User } from "../models";

// TODO Сделать бек на авторизацию

@Injectable({
  providedIn: "root"
})
export class UserService {
  private currentUser: User = {} as User;
}
