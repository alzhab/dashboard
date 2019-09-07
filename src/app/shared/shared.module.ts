import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SecondMenuComponent } from './components/second-menu/second-menu.component';

@NgModule({
  declarations: [SecondMenuComponent],
  imports: [CommonModule, BrowserAnimationsModule]
})
export class SharedModule {}
