import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProjectsService {
  private filterList = ["all", "progress up", "progress down"];
  private activeFilter = this.filterList[0];

  private tabsList = [
    { icon: null, text: "all projects" },
    { icon: null, text: "workflow" }
  ];
  private activeTab = this.tabsList[0].text;
  constructor() {}

  /*----------  Функции для не фиьлтра  ----------*/

  getFilterList() {
    return this.filterList;
  }

  getActiveFilter() {
    return this.activeFilter;
  }

  setActiveFilter(value) {
    this.activeFilter = value;
  }

  /*----------  Функции для панелей  ----------*/

  getTabsList() {
    return this.tabsList;
  }

  getActiveTab() {
    return this.activeTab;
  }

  setActiveTab(value) {
    this.activeTab = value;
  }
}
