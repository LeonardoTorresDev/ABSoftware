import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../../shared/services/data/user.service';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss'],
})
export class InfoUserComponent implements OnInit {
  @Input() description: string;
  userName: string;

  constructor(private user: UserService) {}

  ngOnInit(): void {
    this.user.getUser().subscribe((res: any) => {
      this.userName = res.nick_name;
    });
  }
}
