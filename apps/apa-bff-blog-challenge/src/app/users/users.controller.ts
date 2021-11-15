import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from "@nestjs/common";
import { User } from "./users.model";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  public async getAll(): Promise<User[]> {
    try {
      const { data: users } = await this.usersService.getAll();

      return users;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: "Error when get all USERS",
        },
        HttpStatus.FORBIDDEN
      );
    }
  }

  // what this function is doing exactly?
  @Get(":id")
  public async getUserById(@Param("id") id: string): Promise<User> {
    try {
      const { data: user } = await this.usersService.getUserById(id);

      return user;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: `Error when getting users by id. Maybe userId ${id} not exist`,
        },
        HttpStatus.FORBIDDEN
      );
    }
  }
}
