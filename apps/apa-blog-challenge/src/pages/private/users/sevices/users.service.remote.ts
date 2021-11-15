import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const EXTERNAL_API_URL = "http://localhost:3333/api";

@Injectable({
  providedIn: "root",
})
export class UsersServiceRemote {
  constructor(private readonly httpClient: HttpClient) {}

  public async getUsers() {
    return this.httpClient.get(`${EXTERNAL_API_URL}/users`).toPromise();
  }

  public async getUserById(userId: number) {
    return this.httpClient
      .get(`${EXTERNAL_API_URL}/users/${userId}`)
      .toPromise();
  }
}
