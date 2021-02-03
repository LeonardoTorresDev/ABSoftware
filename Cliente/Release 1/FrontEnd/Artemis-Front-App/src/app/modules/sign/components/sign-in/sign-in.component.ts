import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  instance: boolean

  email: String
  password: String

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.instance = true
  }

  toHome(){
    this.router.navigate(['/home']);
  }
}
