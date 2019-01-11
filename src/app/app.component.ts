import {Component} from '@angular/core';
import {Post} from './models/Post';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyDisk49SIeh9oCpGhjvhwDGwSU4o_xcsfA',
      authDomain: 'blog-activity.firebaseapp.com',
      databaseURL: 'https://blog-activity.firebaseio.com',
      projectId: 'blog-activity',
      storageBucket: 'blog-activity.appspot.com',
      messagingSenderId: '743234098858'
    };
    firebase.initializeApp(config);
  }
}
