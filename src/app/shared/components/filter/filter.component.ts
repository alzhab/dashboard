import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { trigger, style, animate, transition } from "@angular/animations";

@Component({
  selector: "app-component-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
  animations: [
    trigger("enterAnimation", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("300ms", style({ opacity: 1 }))
      ]),
      transition(":leave", [
        style({ opacity: 1 }),
        animate("300ms", style({ opacity: 0 }))
      ])
    ])
  ]
})
export class FilterComponent implements OnInit {
  /*----------  Переенные для фильтра  ----------*/
  public filterOpen = false;
  @Input("filter-active") public filterActive;
  @Input("filter-list") public filterList;
  @Output() public filterChanged = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  /*----------  Функции для фильтра  ----------*/

  // Скрыть или показать список фильтров
  filterToggle() {
    this.filterOpen = !this.filterOpen;
  }

  // Изменение типа фильтра
  changeFilter(filter) {
    this.filterActive = filter;
    this.filterChanged.emit(this.filterActive)
  }
}
