import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../shared/services/data/user.service';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.scss'],
})
export class ObrasComponent implements OnInit {
  nickSidebar: string;
  userID: string;
  constructor(private user: UserService) {
    this.user.getUser().subscribe((res) => {
      this.user = res._id;
    });
  }

  ngOnInit(): void {}

  enviarAlSidebar(str: string) {
    this.nickSidebar = str;
  }

  isOwnProfile(): boolean {
    const token = localStorage.getItem('token');
    if (this.userID === token) {
      return true;
    } else {
      return false;
    }
  }
}
