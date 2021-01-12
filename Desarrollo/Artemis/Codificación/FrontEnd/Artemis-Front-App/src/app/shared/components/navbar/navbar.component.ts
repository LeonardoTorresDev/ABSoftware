import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  showNavbarOptions() {
    let nav = document.getElementsByClassName('navbar');
    console.log(nav);

    // nav.className += ' is-active';
  }
}
