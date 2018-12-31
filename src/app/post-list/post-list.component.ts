import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() posts: Array<Post>;
  postToAdd: Post;

  constructor() {
    this.resetPostItem();
  }

  ngOnInit() {
  }

  resetPostItem() {
    this.postToAdd = new Post('', '');
  }

  onAddPost(post) {
    if (post.title === '' || post.content === '') {
      return;
    }
    if (this.posts === undefined) {
      this.posts = [];
    }
    // set new date
    post.createdAt = new Date();
    this.posts.push(post);
    // reset data
    this.resetPostItem();
  }

}
