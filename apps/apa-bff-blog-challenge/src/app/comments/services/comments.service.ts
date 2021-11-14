import {Injectable} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {AxiosResponse} from "axios";

@Injectable()
export class CommentsService {
    constructor(
        private readonly httpService: HttpService
    ) {
    }

    public getAll(): Promise<AxiosResponse<any[]>> {
        return this.httpService.get('https://jsonplaceholder.typicode.com/posts/1/comments').toPromise()
    }

    public getCommentsByPostId(postId: string): Promise<AxiosResponse<any[]>> {
        return this.httpService.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).toPromise();
    }
}
