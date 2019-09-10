import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ChatService, AsideService, UserService } from "./services";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ChatService, AsideService, UserService]
})
export class CoreModule {}
