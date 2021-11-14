import {Injectable} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {AxiosResponse} from "axios";

@Injectable()
export class PostsService {
    constructor(
        private readonly httpService: HttpService
    ) {
    }

    public getAll(): Promise<AxiosResponse<any[]>> {
        return this.httpService.get('https://jsonplaceholder.typicode.com/posts').toPromise()
    }

    public getPostsByPostId(postId: string): Promise<AxiosResponse<any[]>> {
        return this.httpService.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).toPromise();
    }
}
