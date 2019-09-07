import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-component-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"]
})
export class TabsComponent implements OnInit {
  @Input("tabs-list") public tabsList;
  @Input("tab-active") public tabActive;
  @Output() public tabChanged = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  changeTab(tab) {
    this.tabActive = tab;
    this.tabChanged.emit(tab);
  }
}
