import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersServiceRemote {

  constructor(
      private readonly httpClient: HttpClient
  ) { }

  public async getUsers() {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/users`).toPromise();
  }

  public async getUserById(userId: number) {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${userId}`).toPromise();
  }
}
