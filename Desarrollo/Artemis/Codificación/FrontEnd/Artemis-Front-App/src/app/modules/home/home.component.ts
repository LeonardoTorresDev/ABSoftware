import { Component } from '@angular/core';
import { LoadPostsService } from '../../shared/services/load-posts/load-posts.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [LoadPostsService]
})
export class HomeComponent {

  postsLoaded: any[]

  constructor(private loadPosts: LoadPostsService) {}

  ngOnInit(): void {
    this.postsLoaded = this.loadPosts.getPosts()
  }

}
