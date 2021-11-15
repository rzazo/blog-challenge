import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from "@nestjs/common";
import { PostsService } from "./posts.service";
import { UsersService } from "../users/users.service";
import { CommentsService } from "../comments/comments.service";
import { Post } from "./posts.model";
import { User } from "../users/users.model";

@Controller("posts")
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
    private readonly usersService: UsersService,
    private readonly commentsService: CommentsService
  ) {}

  @Get()
  public async getAll(): Promise<Post[]> {
    try {
      const { data: posts } = await this.postsService.getAll();

      return posts;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: "Error get all POSTS",
        },
        HttpStatus.FORBIDDEN
      );
    }
  }

  @Get(":id")
  public async getDetailPost(@Param("id") id: string): Promise<
    {
      userName: string;
      user: User;
      comments: Comment[];
    } & Post
  > {
    try {
      const { data: post } = await this.postsService.getPostById(id);
      const { data: user } = await this.usersService.getUserById(id);
      const { data: comments } = await this.commentsService.getCommentsByPostId(
        id
      );

      return {
        ...post,
        ...{ userName: user?.name },
        ...{ user },
        ...{ comments },
      };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: "Error when get POST by user",
        },
        HttpStatus.FORBIDDEN
      );
    }
  }
}
