import { Component, OnInit } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";
import { AsideService } from "../../core/services";

@Component({
  selector: "app-layout-aside",
  templateUrl: "./aside.component.html",
  styleUrls: ["./aside.component.scss"]
})
export class AsideComponent implements OnInit {
  public activeLink;
  public asideOpen;
  private _subscription;

  constructor(private _router: Router, private _asideService: AsideService) {
    this.activeLink = this._router.url.replace(/\//g, "");
    _router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.activeLink = event.url.replace(/\//g, "");
      }
    });
    this.getAsideStatus();
    this._subscription = this._asideService.asideUpdated.subscribe(value => {
      this.asideOpen = value; 
    });
    window.onresize = e => {
      this.asideOpen = false;
    };
  }

  ngOnInit() {}

  isActiveLink(val) {
    if (val === this.activeLink) {
      return true;
    }
    return false;
  }

  getAsideStatus() {
    this.asideOpen = this._asideService.getAside();
  }

  menuToggle() {
    this._asideService.asideToggle();
  }

  changeRouter(path) {
    this._router.navigate(["/" + path]);
    this.menuToggle();
  }
}
