import { Component } from '@angular/core';
import {Post} from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listOfPost : Array<Post> = [];

  constructor() {
    this.listOfPost.push(new Post('mon post test', 'on verra si ça marche bien'));
    this.listOfPost.push(new Post('mon post de validation', 'on a vu et ça marche bien'));
    this.listOfPost.push(new Post('mon post', 'bah voila'));
  }
}
