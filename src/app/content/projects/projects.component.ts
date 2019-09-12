import { Component, OnInit } from "@angular/core";
import { ProjectsService } from "../../core";
import { Router, NavigationStart } from "@angular/router";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit {
  /*----------  Переменные для фильтра  ----------*/
  public filterList;
  public filterActive;

  /*----------  Переменные панелей  ----------*/
  public tabsList;
  public tabActive;

  constructor(
    private _projectsService: ProjectsService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.getFilterList();
    this.getActiveFilter();
    this.getTabsList();
    this.getActiveTab();
  }

  /*----------  Функции для фильтра  ----------*/
  // Получение списка фильтров
  getFilterList() {
    this.filterList = this._projectsService.getFilterList();
  }
  // Получение активного фильтров
  getActiveFilter() {
    this.filterActive = this._projectsService.getActiveFilter();
  }
  // Изменение фильтра
  filterChange(value) {
    this._projectsService.setActiveFilter(value);
    this.getActiveFilter();
  }

  /*----------  Функции для панелей  ----------*/
  // Получение списка панелей
  getTabsList() {
    this.tabsList = this._projectsService.getTabsList();
  }
  // Получение активной панели
  getActiveTab() {
    this.tabActive = this._projectsService.getActiveTab();
  }
  // Изменение панели
  tabChange(value) {
    this._projectsService.setActiveTab(value);
    this.getActiveTab();
    this._router.navigate(["projects/" + this.tabActive.replace(/\s/g, "-")]);
  }

  
}
