import { HttpModule, Module } from "@nestjs/common";
import { PostsController } from "./posts.controller";
import { PostsService } from "./posts.service";
import { UsersModule } from "../users/users.module";
import { CommentsModule } from "../comments/comments.module";
import { CommentsService } from "../comments/comments.service";
import { UsersService } from "../users/users.service";

@Module({
  imports: [HttpModule, UsersModule, CommentsModule],
  controllers: [PostsController],
  providers: [PostsService, CommentsService, UsersService],
  exports: [PostsService],
})
export class PostsModule {}
