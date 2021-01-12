import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-opciones-post',
  templateUrl: './opciones-post.component.html',
  styleUrls: ['./opciones-post.component.scss'],
})
export class OpcionesPostComponent implements OnInit {
  @Input() ownPost: boolean;

  constructor() {}

  ngOnInit(): void {}

  isTouch(): boolean {
    if (window.innerWidth < 768) return true;
    return false;
  }
}
