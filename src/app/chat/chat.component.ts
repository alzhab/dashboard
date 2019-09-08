import { Component, OnInit } from "@angular/core";
import { ChatService } from "../core";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit {
  /*----------  Переменные для фильтра  ----------*/
  public filterList;
  public filterActive;

  /*----------  Переменные панелей  ----------*/
  public tabsList;
  public tabActive;

  /*----------  Переменные для чатов  ----------*/
  public mailsList;
  public activeMail;

  constructor(private _chatService: ChatService) {}

  ngOnInit() {
    this.getMailsList();
    this.getMailActive();
    this.getFilterList();
    this.getActiveFilter();
    this.getTabsList();
    this.getActiveTab();
  }

  /*----------  Функции для для чатов  ----------*/
  getMailsList() {
    this.mailsList = this._chatService.getMailsList();
  }

  getMailActive() {
    this.activeMail = this._chatService.getActiveMail();
  }

  setMailActive(mail) {
    this._chatService.setActiveMail(mail);
    this.getMailActive();
  }

  /*----------  Функции для фильтра  ----------*/
  // Получение списка фильтров
  getFilterList() {
    this.filterList = this._chatService.getFilterList();
  }
  // Получение активного фильтров
  getActiveFilter() {
    this.filterActive = this._chatService.getActiveFilter();
  }
  // Изменение фильтра
  filterChange(value) {
    this._chatService.setActiveFilter(value);
    this.getActiveFilter();
  }

  /*----------  Функции для панелей  ----------*/
  // Получение списка панелей
  getTabsList() {
    this.tabsList = this._chatService.getTabsList();
  }
  // Получение активной панели
  getActiveTab() {
    this.tabActive = this._chatService.getActiveTab();
  }
  // Изменение панели
  tabChange(value) {
    this._chatService.setActiveTab(value);
    this.getActiveTab();
  }
}
