import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef
} from "@angular/core";
import { ChatService } from "../../core";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit {
  /**
   *
   * TO DO LIST
   * scrollToEnd() при загрузке страницы
   * при переходе со страницы, начать анимацию элементов
   *
   */

  /*----------  Переменные для фильтра  ----------*/
  public filterList;
  public filterActive;

  /*----------  Переменные панелей  ----------*/
  public tabsList;
  public tabActive;

  /*----------  Переменные для чатов  ----------*/
  public mailsList;
  public activeMail;
  public chatListOpen;
  public profileOpen = false;
  public windowOpen = true;
  @ViewChild("chatScroller", { static: false }) chatScroller: ElementRef;

  constructor(private _chatService: ChatService) {
    // Если размер окна больше телефона то список чатов будет виден сразу
    if (window.innerWidth >= 769) {
      this.chatListOpen = true;
    }
    window.onresize = e => {
      if (window.innerWidth >= 769) {
        this.chatListOpen = true;
      } else {
        this.chatListOpen = false;
        this.profileOpen = false;
        this.windowOpen = true;
      }
    };
    // События для скрытия и открытия портфолио и списка чатов
    document.addEventListener("keydown", e => {
      if (e.ctrlKey && e.key === "ArrowLeft") {
        this.toggleChatList();
      } else if (e.ctrlKey && e.key === "ArrowRight") {
        this.toggleProfile();
      }
    });
  }

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
    this.scrollToEnd();
  }

  toggleChatList() {
    if (window.innerWidth < 769) {
      if (!this.chatListOpen) {
        this.profileOpen = false;
        this.windowOpen = false;
      } else {
        this.windowOpen = true;
      }
    }
    this.chatListOpen = !this.chatListOpen;
  }

  toggleProfile() {
    if (window.innerWidth < 769) {
      if (!this.profileOpen) {
        this.chatListOpen = false;
        this.windowOpen = false;
      } else {
        this.windowOpen = true;
      }
    }
    this.profileOpen = !this.profileOpen;
  }

  @HostListener("window:resize", ["$event"])
  setChatListOpen() {
    if (window.innerWidth > 769) {
      this.chatListOpen = true;
    } else {
      this.chatListOpen = false;
    }
  }

  scrollToEnd() {
    this.chatScroller.nativeElement.scrollTop = this.chatScroller.nativeElement.scrollHeight;
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
