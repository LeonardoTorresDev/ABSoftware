import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/data/user.service';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  show: boolean = false;
  nickname: string;

  constructor(
    private user: UserService,
    private auth: AuthService,
    private router: Router
  ) {
    this.user.getUser().subscribe((res: any) => {
      console.log(res);

      this.nickname = res.nick_name;
    });
  }

  ngOnInit(): void {}

  showNavbarOptions() {
    let nav = document.getElementsByClassName('navbar');
    console.log(nav);

    // nav.className += ' is-active';
  }

  logout() {
    this.auth.logOut().subscribe(() => {
      this.router.navigateByUrl('/welcome');
      window.scroll(0, 0);
    });
  }

  toggleSidebar() {
    this.show = !this.show;
  }
}
