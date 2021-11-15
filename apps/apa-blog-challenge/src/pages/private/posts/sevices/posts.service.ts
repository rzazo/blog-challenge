import { Injectable } from "@angular/core";
import { PostsServiceRemote } from "./posts.service.remote";
import { BehaviorSubject } from "rxjs";
import { UsersService } from "../../users/sevices/users.service";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  private activePost = new BehaviorSubject<any>(null);
  public activePost$ = this.activePost.asObservable();

  constructor(
    private readonly postsServiceRemote: PostsServiceRemote,
    private readonly usersService: UsersService
  ) {}

  public async getPosts() {
    return await this.postsServiceRemote.getPosts();
  }

  public async getPostById(id: number) {
    return await this.postsServiceRemote.getPostById(id);
  }

  public async updatePost(
    id: any = 101,
    userId: any = 101,
    title: string,
    body: string
  ) {
    return await this.postsServiceRemote.updatePost(id, userId, title, body);
  }

  public async createPost(userId: any = 101, title: string, body: string) {
    return await this.postsServiceRemote.createPost(userId, title, body);
  }

  public async getComments(postId: number) {
    return await this.postsServiceRemote.getComments(postId);
  }

  public async setActivePost(post: any) {
    if (!!post?.userId) {
      const { username }: any = await this.usersService.getUserById(
        post?.userId
      );
      post.userName = username;
    }

    this.activePost.next(post);
  }

  public getActivePost() {
    return this.activePost.getValue();
  }
}
