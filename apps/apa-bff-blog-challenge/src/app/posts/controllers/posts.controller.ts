import {Controller, Get, HttpException, HttpStatus, Param} from '@nestjs/common';
import {PostsService} from "../services/posts.service";
import {UsersService} from "../../users/services/users.service";
import {CommentsService} from "../../comments/services/comments.service";

@Controller('posts')
export class PostsController {
    constructor(
        private readonly postsService: PostsService,
        private readonly usersService: UsersService,
        private readonly commentsService: CommentsService
    ) {
    }

    @Get()
    public async getAll(): Promise<any> {
        try {
            const {data: posts} = await this.postsService.getAll();

            return posts;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Error get all POSTS',
            }, HttpStatus.FORBIDDEN);
        }
    }

    @Get(':id')
    public async getDetailPost(@Param('id') id: string): Promise<any> {
        try {
            const {data: post} = await this.postsService.getPostsByPostId(id)
            const {data: user}: any = await this.usersService.getUsersById(id);
            const {data: comments}: any = await this.commentsService.getCommentsByPostId(id);

            return {...post, ...{userName: user?.name}, ...{user}, ...{comments}};
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Error when get POST by user',
            }, HttpStatus.FORBIDDEN);
        }
    }
}