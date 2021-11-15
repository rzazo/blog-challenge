import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NewEditPostComponent } from "./new-edit-post.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { UsersService } from "../../../users/sevices/users.service";
import { UsersServiceRemote } from "../../../users/sevices/users.service.remote";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("NewEditPostComponent", () => {
  let component: NewEditPostComponent;
  let fixture: ComponentFixture<NewEditPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
      providers: [UsersService, UsersServiceRemote],
      declarations: [NewEditPostComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEditPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
