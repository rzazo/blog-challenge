import { Injectable } from "@angular/core";
import { UsersServiceRemote } from "./users.service.remote";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private readonly userServiceRemote: UsersServiceRemote) {}

  public async getUsers() {
    return await this.userServiceRemote.getUsers();
  }

  public async getUserById(userId: number) {
    return await this.userServiceRemote.getUserById(userId);
  }
}
