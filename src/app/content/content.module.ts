import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContentRoutingModule } from "./content-routing.module";
import { ContentComponent } from "./content.component";

import { HeaderComponent, AsideComponent, SharedModule } from "../shared";

@NgModule({
  declarations: [ContentComponent, HeaderComponent, AsideComponent],
  imports: [CommonModule, ContentRoutingModule, SharedModule]
})
export class ContentModule {}
