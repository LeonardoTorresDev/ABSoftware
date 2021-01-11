import { Component } from '@angular/core';
import { LoadPostsService } from '../../shared/services/load-posts/load-posts.service';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth/auth.service';
import { UserService } from '../../shared/services/data/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [LoadPostsService],
})
export class HomeComponent {
  usuario: string;
  postsLoaded: any[];

  constructor(
    private loadPosts: LoadPostsService,
    private auth: AuthService,
    private router: Router,
    private user: UserService
  ) {}

  ngOnInit(): void {
    this.postsLoaded = this.loadPosts.getPosts();
    this.setName();
  }

  loading = true;

  logout() {
    this.auth.logOut().subscribe(() => {
      this.router.navigateByUrl('/welcome');
      window.scroll(0, 0);
    });
  }

  //Eliminar esta función cuando se termine el layout y la lógica del módulo
  setName(): void {
    this.user.getUser().subscribe((res: any) => {
      console.log(res);

      this.usuario = res.nick_name;
    });
  }
}
