import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ChatRoutingModule } from "./chat-routing.module";
import { ChatComponent } from "./chat.component";
import { FilterComponent, TabsComponent } from "../shared";

@NgModule({
  declarations: [ChatComponent, FilterComponent, TabsComponent],
  imports: [CommonModule, ChatRoutingModule]
})
export class ChatModule {}
