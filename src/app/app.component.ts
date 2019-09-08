import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  HostListener
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
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
}