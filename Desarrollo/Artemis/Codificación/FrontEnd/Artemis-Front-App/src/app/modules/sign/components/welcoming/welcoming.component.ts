import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcoming',
  templateUrl: './welcoming.component.html',
  styleUrls: ['./welcoming.component.scss']
})
export class WelcomingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isSignUp();
  }

  isSignUp(){
    if(this.router.url === "/signup"){
      return true;
    }
  }

}
