import { LocalDataBaseService } from './05-depencency-c';

export interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export class PostService {
  private posts: IPost[] = [];

  constructor() {}

  async getPosts() {
    const jsonDB = new LocalDataBaseService();
    this.posts = await jsonDB.getFakePosts();

    return this.posts;
  }
}
