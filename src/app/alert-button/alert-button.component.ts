import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.scss']
})
export class AlertButtonComponent implements OnInit {

  content = 'you have been warned';
  hideContent = true;
  severity = 423

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.hideContent = !this.hideContent;
  }

}
