import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SignInRoutingModule } from "./sign-in-routing.module";
import { SignInComponent } from "./sign-in.component";

import { AuthService } from "../auth.service";

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, SignInRoutingModule]
})
export class SignInModule {}
