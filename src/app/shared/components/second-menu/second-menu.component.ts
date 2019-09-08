import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-component-second-menu",
  templateUrl: "./second-menu.component.html",
  styleUrls: ["./second-menu.component.scss"]
})
export class SecondMenuComponent implements OnInit {
  /*----------  Переменные second menu  ----------*/
  public showSecondMenu = false;
  @Input("message") public filterMessage: string;

  /*----------  Переменные для фильтра  ----------*/
  @Input("filter-list") public filterList;
  @Input("filter-active") public filterActive;
  @Output() public filterChanged = new EventEmitter();

  /*----------  Переменные панелей  ----------*/
  @Input("tabs-list") public tabsList;
  @Input("tab-active") public tabActive;
  @Output() public tabChanged = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  /*----------  Функции для second menu  ----------*/
  toggleSecondMenu() {
    this.showSecondMenu = !this.showSecondMenu;
  }

  /*----------  Функции для фильтра  ----------*/
  changeFilter(filter) {
    this.filterChanged.emit(filter);
  }

  /*----------  Функции для панелей  ----------*/
  changeTab(tab) {
    this.tabChanged.emit(tab);
  }
}
