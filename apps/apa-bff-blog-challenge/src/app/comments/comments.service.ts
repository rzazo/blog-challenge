import { HttpService, Injectable } from "@nestjs/common";
import { AxiosResponse } from "axios";

@Injectable()
export class CommentsService {
  constructor(private readonly httpService: HttpService) {}

  public getAll(): Promise<AxiosResponse<Comment[]>> {
    return this.httpService
      .get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .toPromise();
  }

  public getCommentsByPostId(
    postId: string
  ): Promise<AxiosResponse<Comment[]>> {
    return this.httpService
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .toPromise();
  }
}
