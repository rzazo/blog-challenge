import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { RouterModule } from "@angular/router";

import { POSTS_ROUTES } from "./posts-routes";
import { PostsComponent } from "./components/posts.component";
import { DialogModule } from "primeng/dialog";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RippleModule } from "primeng/ripple";
import { InputTextModule } from "primeng/inputtext";
import { NewEditPostComponent } from "./components/new-edit-post/new-edit-post.component";
import { ToastModule } from "primeng/toast";
import { SidebarModule } from "primeng/sidebar";
import { CardModule } from "primeng/card";
import { FieldsetModule } from "primeng/fieldset";
import { DetailPostComponent } from "./components/detail-post/detail-post.component";
import { DetailUserComponent } from "./components/detail-user/detail-user.component";
import { GMapModule } from "primeng/gmap";

@NgModule({
  declarations: [
    PostsComponent,
    NewEditPostComponent,
    DetailPostComponent,
    DetailUserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(POSTS_ROUTES),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    TableModule,
    ButtonModule,
    DialogModule,
    RippleModule,
    InputTextModule,
    ToastModule,
    SidebarModule,
    FieldsetModule,
    CardModule,
  ],
})
export class PostsModule {}
