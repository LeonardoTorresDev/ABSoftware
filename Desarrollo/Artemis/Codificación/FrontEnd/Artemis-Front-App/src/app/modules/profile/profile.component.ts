import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../shared/services/data/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  pagina: string;
  nickname: string;

  constructor(private rutaActiva: ActivatedRoute, private user: UserService) {}

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((params) => {
      console.log(params);
    });

    
  }
}
