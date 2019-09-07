import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class AsideService {
  private asideOpen = false;
  asideUpdated: Subject<boolean> = new Subject<boolean>();

  asideToggle() {
    this.asideOpen = !this.asideOpen;
    this.asideUpdated.next(this.asideOpen);
  }

  getAside() {
    return this.asideOpen;
  }

  constructor() {}
}
