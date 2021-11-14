import {Module} from "@nestjs/common";
import {CommentsController} from "./controllers/comments.controller";
import {CommentsService} from "./services/comments.service";
import {HttpModule} from "@nestjs/axios";

@Module({
    imports: [
        HttpModule.register({
            timeout: 5000,
            maxRedirects: 5,
        }),
    ],
    controllers: [
        CommentsController
    ],
    providers: [
        CommentsService
    ],
    exports: [
        CommentsService
    ]
})
export class CommentsModule {
}
