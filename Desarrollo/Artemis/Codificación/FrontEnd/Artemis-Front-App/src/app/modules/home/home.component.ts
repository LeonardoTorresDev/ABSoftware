import { Component } from '@angular/core';
import { LoadPostsService } from '../../shared/services/load-posts/load-posts.service';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [LoadPostsService],
})
export class HomeComponent {
  user: string;
  postsLoaded: any[];

  constructor(
    private loadPosts: LoadPostsService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.postsLoaded = this.loadPosts.getPosts();
    this.setName();
  }

  loading = true;

  logout() {
    this.auth.logOut().subscribe(() => {
      this.router.navigateByUrl('/welcome');
    });
  }

  //Eliminar esta función cuando se termine el layout y la lógica del módulo
  setName(): void {
    this.auth.getUser().subscribe((res: any) => {
      this.user = res.nick_name;
    });
  }
}
