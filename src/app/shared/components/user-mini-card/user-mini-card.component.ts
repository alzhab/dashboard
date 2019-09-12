import { Component, OnInit, Input } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-component-user-mini-card",
  templateUrl: "./user-mini-card.component.html",
  styleUrls: ["./user-mini-card.component.scss"],
  animations: [
    trigger("enterAnimation", [
      transition(":enter", [
        style({ transform: "translateX(0)", opacity: 0 }),
        animate("300ms", style({ transform: "translateX(-100%)", opacity: 1 }))
      ]),
      transition(":leave", [
        style({ transform: "translateX(-100%)", opacity: 1 }),
        animate("300ms", style({ transform: "translateX(0)", opacity: 0 }))
      ])
    ])
  ]
})
export class UserMiniCardComponent implements OnInit {
  @Input('user') user
  public showMenu = false;

  constructor() {}

  ngOnInit() {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
