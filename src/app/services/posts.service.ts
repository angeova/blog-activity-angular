import {Injectable} from '@angular/core';
import {Post} from '../models/Post';
import {Subject} from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  emit() {
    this.postsSubject.next(this.posts);
  }

  constructor() {
    this.getPosts();
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emit();
        }
      );
  }

  getOne(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/posts/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  saveAll() {
    firebase.database().ref('/posts').set(this.posts);
  }

  create(postToSave: Post) {
    let id = this.posts.length === 0 ? undefined : Math.max.apply(Math, this.posts.map(function (o) {
      return o.id;
    }));
    if (id === undefined) {
      id = 0;
    }
    postToSave.id = id + 1;
    this.posts.push(postToSave);
    this.saveAll();
    this.emit();
  }

  remove(post: Post) {
    const indexToRemove = this.posts.findIndex(
      (elt) => {
        if (elt.id === post.id) {
          return true;
        }
      }
    );
    this.posts.splice(indexToRemove, 1);
    this.saveAll();
    this.emit();
  }

  loveIt(post: Post) {
    const indexOfPost = this.posts.findIndex(
      (elt) => {
        if (elt.id === post.id) {
          return true;
        }
      }
    );
    this.posts[indexOfPost].loveIts++;
    this.saveAll();
    this.emit();
  }

  dontLoveIt(post: Post) {
    const indexOfPost = this.posts.findIndex(
      (elt) => {
        if (elt.id === post.id) {
          return true;
        }
      }
    );
    this.posts[indexOfPost].dontLoveIts++;
    this.saveAll();
    this.emit();
  }

}
