import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DisconnectedGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (this.auth.isNotLogged()) {
      return true;
    } else {
      this.router.navigateByUrl('/home');
      return false;
    }
  }
}
