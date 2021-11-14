import {Module} from "@nestjs/common";
import {UsersController} from "./controllers/users.controller";
import {UsersService} from "./services/users.service";
import {HttpModule} from "@nestjs/axios";

@Module({
    imports: [
        HttpModule.register({
            timeout: 5000,
            maxRedirects: 5,
        }),
    ],
    controllers: [
        UsersController
    ],
    providers: [
        UsersService
    ],
    exports: [
        UsersService
    ]
})
export class UsersModule {
}
