import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FilterComponent,
  SecondMenuComponent,
  TabsComponent,
  ProgressbarComponent,
  UserMiniCardComponent
} from "./components";

import { HeaderComponent, AsideComponent } from "./layout";

@NgModule({
  declarations: [
    FilterComponent,
    SecondMenuComponent,
    TabsComponent,
    HeaderComponent,
    AsideComponent,
    ProgressbarComponent,
    UserMiniCardComponent
  ],
  imports: [CommonModule],
  exports: [
    FilterComponent,
    SecondMenuComponent,
    TabsComponent,
    HeaderComponent,
    AsideComponent,
    ProgressbarComponent,
    UserMiniCardComponent
  ]
})
export class SharedModule {}
