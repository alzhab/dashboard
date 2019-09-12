import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {
  @Input('value') value:number

  constructor() { }

  ngOnInit() {
  }

}
