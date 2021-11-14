import {Controller, Get, HttpException, HttpStatus, Param} from '@nestjs/common';
import {UsersService} from "../services/users.service";

@Controller('users')
export class UsersController {

    constructor(
        private usersService: UsersService,
    ) {
    }

    @Get()
    public async getAll(): Promise<any> {
        try {
            const {data: users} = await this.usersService.getAll();

            return users;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Error when get all USERS',
            }, HttpStatus.FORBIDDEN);
        }
    }

    @Get(':id')
    public async getCommentsByPostId(@Param('id') id: string): Promise<any> {
        try {
            const {data: user} = await this.usersService.getUsersById(id);

            return user;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: `Error when get COMMENTS by user. Maybe userId ${id} not exist`,
            }, HttpStatus.FORBIDDEN);
        }
    }
}