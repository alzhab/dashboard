import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// TODO создать localStorage server. Следить за menu
// TODO создать json Данные вместо BD

import {
  ChatService,
  AsideService,
  UserService,
  ProjectsService
} from "./services";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ChatService, AsideService, UserService, ProjectsService]
})
export class CoreModule {}
