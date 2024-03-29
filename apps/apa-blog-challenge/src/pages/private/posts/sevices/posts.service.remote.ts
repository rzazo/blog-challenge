import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const API_URL = "http://localhost:3333/api";

@Injectable({
  providedIn: "root",
})
export class PostsServiceRemote {
  constructor(private readonly httpClient: HttpClient) {}

  public getPosts() {
    return this.httpClient.get(`${API_URL}/posts`).toPromise();
  }

  public getPostById(id: number) {
    return this.httpClient.get(`${API_URL}/posts/${id}`).toPromise();
  }

  public updatePost(id: any, userId: any, title: string, body: string) {
    const params = { id, userId, title, body };

    return this.httpClient
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, params)
      .toPromise();
  }

  public createPost(userId: any, title: string, body: string) {
    const params = { userId, title, body };

    return this.httpClient
      .post(`https://jsonplaceholder.typicode.com/posts`, params)
      .toPromise();
  }

  public getComments(id: number = 1) {
    return this.httpClient.get(`${API_URL}/comments/${id}`).toPromise();
  }
}
