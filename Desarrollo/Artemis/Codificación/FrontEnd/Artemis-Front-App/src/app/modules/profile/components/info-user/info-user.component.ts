import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {

  @Input() description: string 
  @Input() userName: string

  constructor() { }

  ngOnInit(): void {
  }

}
