import { PostProvider } from './05-depencency-c';

export interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export class PostService {
  private posts: IPost[] = [];

  constructor(private postProvider: PostProvider) {}

  async getPosts() {
    this.posts = await this.postProvider.getPosts();

    return this.posts;
  }
}
