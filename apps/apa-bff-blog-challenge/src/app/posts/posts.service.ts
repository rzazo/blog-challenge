import { HttpService, Injectable } from "@nestjs/common";
import { AxiosResponse } from "axios";
import { Post } from "./posts.model";

@Injectable()
export class PostsService {
  constructor(private readonly httpService: HttpService) {}

  public getAll(): Promise<AxiosResponse<Post[]>> {
    return this.httpService
      .get("https://jsonplaceholder.typicode.com/posts")
      .toPromise();
  }

  public getPostById(postId: string): Promise<AxiosResponse<Post>> {
    return this.httpService
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .toPromise();
  }
}
