import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {HttpModule} from "@nestjs/axios";
import {CommentsModule} from "./comments/comments.module";
import {UsersModule} from "./users/users.module";
import {PostsModule} from "./posts/posts.module";

@Module({
    imports: [
        HttpModule.register({
            timeout: 5000,
            maxRedirects: 5,
        }),

        CommentsModule,
        UsersModule,
        PostsModule
    ],
    controllers: [
        AppController,
    ],
    providers: [
        AppService,
    ]
})
export class AppModule {
}
