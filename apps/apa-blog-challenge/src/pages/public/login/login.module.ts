import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { LOGIN_ROUTES } from "./login-routes";
import { LoginComponent } from "./components/login.component";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RouterModule.forChild(LOGIN_ROUTES)],
})
export class LoginModule {}
