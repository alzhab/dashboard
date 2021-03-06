import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  HostListener
} from "@angular/core";

import { slideInAnimation } from "../shared";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
  animations: [slideInAnimation]
})
export class ContentComponent implements AfterViewInit {
  @ViewChild("header", { static: true }) header: ElementRef;
  @ViewChild("wrap", { static: true }) wrap: ElementRef;

  public headerHeight: number;

  ngAfterViewInit() {
    this.headerHeight = this.header.nativeElement.offsetHeight;
    this.wrap.nativeElement.style.height =
      window.innerHeight - this.headerHeight + "px";
  }
  @HostListener("window:resize", ["$event"])
  setWrapHeight() {
    this.headerHeight = this.header.nativeElement.offsetHeight;
    this.wrap.nativeElement.style.height =
      window.innerHeight - this.headerHeight + "px";
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
