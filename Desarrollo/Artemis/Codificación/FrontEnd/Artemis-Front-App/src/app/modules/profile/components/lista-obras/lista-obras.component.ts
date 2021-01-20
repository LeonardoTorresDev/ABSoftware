import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-obras',
  templateUrl: './lista-obras.component.html',
  styleUrls: ['./lista-obras.component.scss'],
})
export class ListaObrasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  list = document.querySelectorAll('.list');

  accordion(e) {
    e.stopPropagation();
    if (e.classList.contains('active')) {
      e.classList.remove('active');
    } else if (e.parentElement.parentElement.classList.contains('active')) {
      e.classList.add('active');
    } else {
      for (let i = 0; i < this.list.length; i++) {
        this.list[i].classList.remove('active');
      }
      e.classList.add('active');
    }
  }
}
