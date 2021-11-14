import {Module} from "@nestjs/common";
import {PostsController} from "./controllers/posts.controller";
import {PostsService} from "./services/posts.service";
import {UsersModule} from "../users/users.module";
import {HttpModule} from "@nestjs/axios";
import {CommentsModule} from "../comments/comments.module";

@Module({
    imports: [
        HttpModule,
        
        UsersModule,
        CommentsModule
    ],
    controllers: [
        PostsController
    ],
    providers: [
        PostsService
    ],
    exports: [
        PostsService
    ]
})
export class PostsModule {
}
