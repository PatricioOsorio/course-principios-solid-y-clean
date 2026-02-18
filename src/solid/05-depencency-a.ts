import { PostService } from './05-depencency-b';
import { JsonDataBaseService, LocalDataBaseService } from './05-depencency-c';

// Main
(async () => {
  const dataServiceProvider = new LocalDataBaseService();

  const postService = new PostService(dataServiceProvider);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
