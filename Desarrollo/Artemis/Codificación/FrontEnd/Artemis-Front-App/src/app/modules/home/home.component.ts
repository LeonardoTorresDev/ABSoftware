import { Component } from '@angular/core';
import { LoadPostsService } from '../../shared/services/load-posts/load-posts.service'
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [LoadPostsService]
})
export class HomeComponent {

  postsLoaded: any[]

  constructor(private loadPosts: LoadPostsService,
    private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.postsLoaded = this.loadPosts.getPosts()
  }

  userName = '';
  loading = true;

  logout() {
    this.auth.logOut().subscribe(() => {
      this.router.navigateByUrl('/welcome');
    });
  }
}
