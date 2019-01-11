import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;


  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
  }

  onLoveIt() {
    this.postsService.loveIt(this.post);
  }

  onDontLoveIt() {
    this.postsService.dontLoveIt(this.post);
  }

  onRemove() {
    this.postsService.remove(this.post);
  }
}
