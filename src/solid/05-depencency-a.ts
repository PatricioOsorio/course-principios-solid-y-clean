import { PostService } from './05-depencency-b';
import {
  JsonDataBaseService,
  LocalDataBaseService,
  WebApiPostProviderService,
} from './05-depencency-c';

// Main
(async () => {
  // const dataServiceProvider = new LocalDataBaseService();
  // const dataServiceProvider = new JsonDataBaseService();
  const dataServiceProvider = new WebApiPostProviderService();

  const postService = new PostService(dataServiceProvider);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
