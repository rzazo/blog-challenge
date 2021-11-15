import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import("../pages/public/login").then((module) => module.LoginModule),
  },
  {
    path: "posts",
    loadChildren: () =>
      import("../pages/private/posts").then((module) => module.PostsModule),
  },
  {
    path: "users",
    loadChildren: () =>
      import("../pages/private/users").then((module) => module.UsersModule),
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  {
    path: "**",
    loadChildren: () =>
      import("../pages/public/no-content/no-content.module").then(
        (module) => module.NoContentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
