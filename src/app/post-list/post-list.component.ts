import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../models/Post';
import {PostsService} from '../services/posts.service';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  @Input() posts: Array<Post>;
  postToAdd: Post;
  postsSubscription: Subscription;

  constructor(private postsService: PostsService, private router: Router) {
    this.resetPostItem();
  }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (items: Post[]) => {
        this.posts = items;
      }
    );
    this.postsService.emit();
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

  ngOnDestroy(): void {
    this.postsSubscription.unsubscribe();
  }

  onNewPost() {
    this.router.navigate(['/new']);
  }
}
