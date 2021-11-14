import {Controller, Get, HttpException, HttpStatus, Param} from '@nestjs/common';
import {CommentsService} from "../services/comments.service";

@Controller('comments')
export class CommentsController {

    constructor(
        private commentsService: CommentsService,
    ) {
    }

    @Get()
    public async getAll(): Promise<any> {
        try {
            const {data: comments} = await this.commentsService.getAll();

            return comments;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Error when get all COMMENTS',
            }, HttpStatus.FORBIDDEN);
        }
    }

    @Get(':id')
    public async getCommentsByPostId(@Param('id') id: string): Promise<any> {
        try {
            const {data: comments} = await this.commentsService.getCommentsByPostId(id);

            return comments;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Error when get COMMENTS by post.',
            }, HttpStatus.FORBIDDEN);
        }
    }
}