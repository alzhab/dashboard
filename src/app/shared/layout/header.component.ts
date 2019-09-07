import { Component, OnInit } from "@angular/core";
import { trigger, style, animate, transition } from "@angular/animations";
import { ChatService, AsideService } from "../../core/services";
import { UnreadMail } from "../../core/models";

@Component({
  selector: "app-layout-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  animations: [
    trigger("enterAnimation", [
      transition(":enter", [
        style({ transform: "translateY(0)", opacity: 0 }),
        animate("300ms", style({ transform: "translateY(100%)", opacity: 1 }))
      ]),
      transition(":leave", [
        style({ transform: "translateY(100%)", opacity: 1 }),
        animate("300ms", style({ transform: "translateY(0)", opacity: 0 }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  public notification = true;
  public openNotList = false;
  public menuOpenMobile = false;
  public notificationList: UnreadMail[];

  constructor(
    private _chatService: ChatService,
    private _asideService: AsideService
  ) {}

  ngOnInit() {
    this.notificationList = this._chatService.getUnreadedMessage();
  }

  toggleNotificationList() {
    if (this.notificationList.length) {
      this.openNotList = !this.openNotList;
    }
  }

  removeNotification(index) {
    this.notificationList.splice(index, 1);
  }

  menuToggle() {
    this._asideService.asideToggle();
  }
}
