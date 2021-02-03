import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  year: number;

  constructor() {}

  ngOnInit(): void {
    this.setYear();
  }

  setYear(): string {
    const actualYear = new Date();
    this.year = actualYear.getFullYear();
    return this.year.toString();
  }
}
