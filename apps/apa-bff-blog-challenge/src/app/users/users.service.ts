import { Injectable, HttpService } from "@nestjs/common";
import { User } from "./users.model";
import { AxiosResponse } from "axios";

@Injectable()
export class UsersService {
  constructor(private readonly httpService: HttpService) {}

  public getAll(): Promise<AxiosResponse<User[]>> {
    return this.httpService
      .get("https://jsonplaceholder.typicode.com/users")
      .toPromise();
  }

  public getUserById(userId: string): Promise<AxiosResponse<User>> {
    return this.httpService
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .toPromise();
  }
}
