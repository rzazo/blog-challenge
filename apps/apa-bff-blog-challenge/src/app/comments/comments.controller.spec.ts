import { Test, TestingModule } from "@nestjs/testing";
import { CommentsService } from "./comments.service";
import { CommentsController } from "./comments.controller";
import { HttpModule } from "@nestjs/common";

export const comment1 = {
  postId: 1,
  id: 1,
  name: "id labore ex et quam laborum",
  email: "Eliseo@gardner.biz",
  body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
};

export const comment2 = {
  postId: 2,
  id: 2,
  name: "quo vero reiciendis velit similique earum",
  email: "Jayne_Kuhic@sydney.com",
  body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
};

export const comment3 = {
  postId: 2,
  id: 2,
  name: "quo vero reiciendis velit similique earum",
  email: "Jayne_Kuhic@sydney.com",
  body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
};

describe("CommentsController", () => {
  let commentsController: CommentsController;
  let app: TestingModule;
  const commentsService = {
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
      controllers: [CommentsController],
      providers: [CommentsService],
      exports: [CommentsService],
    })
      .overrideProvider(CommentsService)
      .useValue(commentsService)
      .compile();

    commentsController = app.get<CommentsController>(CommentsController);
  });

  afterAll(() => {
    app.close();
  });

  describe("Comments Controller tests", () => {
    it("should return all the comments", async () => {
      const all = await commentsController.getAll();
      expect(all).toStrictEqual([comment1, comment2]);
    });
    it("should return comments by post id", async () => {
      const user = await commentsController.getCommentsByPostId("2");
      expect(user).toStrictEqual([comment2, comment3]);
    });
  });
});
