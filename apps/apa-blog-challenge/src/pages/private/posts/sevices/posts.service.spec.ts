import { TestBed } from "@angular/core/testing";

import { PostsService } from "./posts.service";
import { HttpClientModule } from "@angular/common/http";
import { PostsServiceRemote } from "./posts.service.remote";
import { UsersService } from "../../users/sevices/users.service";

const posts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure",
  },
];

describe("PostsService", () => {
  let postsService: PostsService;
  let postsServiceRemoteSpyObj: any = jasmine.createSpyObj(
    "PostsServiceRemote",
    ["getPosts"]
  );

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        { provide: PostsServiceRemote, useValue: postsServiceRemoteSpyObj },
        UsersService,
      ],
    });
    postsService = TestBed.inject(PostsService);
    postsServiceRemoteSpyObj = TestBed.inject(
      PostsServiceRemote
    ) as jasmine.SpyObj<PostsServiceRemote>;
  });

  it("should be created", () => {
    expect(postsService).toBeTruthy();
  });

  it("#getPosts should return all posts", (done) => {
    postsServiceRemoteSpyObj.getPosts.and.returnValue(posts);
    postsService.getPosts().then((response) => {
      expect(response).toEqual(posts);
      done();
    });
  });
});
