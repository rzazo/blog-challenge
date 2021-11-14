import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {USERS_ROUTES} from "./users-routes";
import {UsersComponent} from './components/users.component';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";

@NgModule({
    declarations: [
        UsersComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(USERS_ROUTES),

        TableModule,
        ButtonModule,
        InputTextModule,

    ]
})
export class UsersModule {
}
