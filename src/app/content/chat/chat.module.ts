import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ChatRoutingModule } from "./chat-routing.module";
import { ChatComponent } from "./chat.component";
import { FilterComponent, TabsComponent, SecondMenuComponent } from "../../shared";

@NgModule({
  declarations: [
    ChatComponent,
    FilterComponent,
    TabsComponent,
    SecondMenuComponent
  ],
  imports: [CommonModule, ChatRoutingModule]
})
export class ChatModule {}
