import {Injectable} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {AxiosResponse} from "axios";

@Injectable()
export class UsersService {
    constructor(
        private readonly httpService: HttpService
    ) {
    }

    public getAll(): Promise<AxiosResponse<any[]>> {
        return this.httpService.get('https://jsonplaceholder.typicode.com/users').toPromise();
    }

    public getUsersById(userId: string): Promise<AxiosResponse<any[]>> {
        return this.httpService.get(`https://jsonplaceholder.typicode.com/users/${userId}`).toPromise()
    }
}
