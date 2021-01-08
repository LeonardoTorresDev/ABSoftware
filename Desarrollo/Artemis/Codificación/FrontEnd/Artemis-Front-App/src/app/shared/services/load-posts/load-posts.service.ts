import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadPostsService {

  posts = []

  constructor() { }

  getPosts(){
    return this.posts
  }
}
