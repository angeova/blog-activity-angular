export class Post {
  title: string;
  content: string;
  loveIts: number;
  createdAt: Date;

  constructor(title: string, content: string) {
    this.createdAt = new Date();
    this.title = title;
    this.content = content;
  }
}
