import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { NoContentComponent } from "./components";
import { NO_CONTENT_ROUTES } from "./no-content-routes";

@NgModule({
  declarations: [NoContentComponent],
  imports: [CommonModule, RouterModule.forChild(NO_CONTENT_ROUTES)],
})
export class NoContentModule {}
