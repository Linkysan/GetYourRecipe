import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  showLinkedIn() {
    window.open("https://www.linkedin.com/in/david-sanchez-martin-b54465136");
  }

  sendEmail() {
    window.open("mailto:david.s.tec.info@gmail.com");
  }

}
