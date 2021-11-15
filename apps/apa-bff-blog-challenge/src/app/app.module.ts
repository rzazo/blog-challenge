import { HttpModule, Module } from "@nestjs/common";
import { CommentsModule } from "./comments/comments.module";
import { UsersModule } from "./users/users.module";
import { PostsModule } from "./posts/posts.module";

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),

    CommentsModule,
    UsersModule,
    PostsModule,
  ],
})
export class AppModule {}
