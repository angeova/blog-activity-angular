import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() createdAt: Date;
  loveIts: number = 0;


  constructor() {
  }

  ngOnInit() {
  }

  onLoveIt() {
    this.loveIts++;
  }

  onDontLoveIt() {
    this.loveIts--;
  }

}
