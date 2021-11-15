import { Test, TestingModule } from "@nestjs/testing";
import { PostsController } from "./posts.controller";
import { PostsService } from "./posts.service";
import { CommentsService } from "../comments/comments.service";
import { UsersService } from "../users/users.service";
import { user1, user2 } from "../users/users.controller.spec";
import {
  comment1,
  comment2,
  comment3,
} from "../comments/comments.controller.spec";
import { HttpModule } from "@nestjs/common";

const post1 = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
};

const post2 = {
  userId: 1,
  id: 2,
  title: "qui est esse",
  body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
};

describe("Posts Controller", () => {
  let postsController: PostsController;
  let app: TestingModule;
  let postsService = {
    getAll: () => {
      return Promise.resolve({
        data: [post1, post2],
      });
    },
    getPostById: () => {
      return Promise.resolve({
        data: post2,
      });
    },
  };

  let usersService = {
    getAll: () => {
      return Promise.resolve({
        data: [user1, user2],
      });
    },
    getUserById: () => {
      return Promise.resolve({
        data: user2,
      });
    },
  };

  let commentsService = {
    getAll: () => {
      return Promise.resolve({
        data: [comment1, comment2],
      });
    },
    getCommentsByPostId: () => {
      return Promise.resolve({
        data: [comment2, comment3],
      });
    },
  };

  beforeEach(async () => {
    app = await Test.createTestingModule({
      imports: [
        HttpModule.register({
          timeout: 5000,
          maxRedirects: 5,
        }),
      ],
      controllers: [PostsController],
      providers: [PostsService, CommentsService, UsersService],
      exports: [PostsService],
    })
      .overrideProvider(PostsService)
      .useValue(postsService)
      .overrideProvider(CommentsService)
      .useValue(commentsService)
      .overrideProvider(UsersService)
      .useValue(usersService)
      .compile();

    postsController = app.get<PostsController>(PostsController);
  });

  afterAll(() => {
    app.close();
  });

  describe("PostsController tests", () => {
    it("should return all the posts", async () => {
      const all = await postsController.getAll();
      expect(all).toStrictEqual([post1, post2]);
    });
    it("should return a detailed post", async () => {
      const user = await postsController.getDetailPost("2");
      expect(user).toStrictEqual({
        user: user2,
        comments: [comment2, comment3],
        ...post2,
        userName: user2.name,
      });
    });
  });
});
