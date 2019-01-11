import {DatePipe} from '@angular/common';

export class Post {
  id: number;
  title: string;
  content: string;
  loveIts: number;
  dontLoveIts: number;
  createdAt: string;

  constructor()
  constructor(title: string, content: string)
  constructor(title?: string, content?: string){
    let dp = new DatePipe('en-EN' /* locale .. */);
    this.createdAt = dp.transform(new Date(), 'dd/MM/yyyy, hh:mm:ss a');
    this.title = title;
    this.content = content;
    this.loveIts = 0;
    this.dontLoveIts = 0;
  }
}
