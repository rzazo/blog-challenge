import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PostsComponent } from "./posts.component";
import { HttpClientModule } from "@angular/common/http";
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { PostsService } from "../sevices/posts.service";
import { PostsServiceRemote } from "../sevices/posts.service.remote";
import { MessageService } from "primeng/api";
import { HttpTestingController } from "@angular/common/http/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";

let MockApiHandlerService = jasmine.createSpyObj("PostsService", {
  getPosts: Promise.resolve([
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
  ]),
  getPostById: Promise.resolve([
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
  ]),
});
export default MockApiHandlerService;

describe("PostsComponent", () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let formBuilder: FormBuilder;
  let messageServiceSpyObj: any = jasmine.createSpyObj("MessageService", [
    "add",
  ]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
      providers: [
        { provide: PostsService, useValue: MockApiHandlerService },
        PostsServiceRemote,
        { provide: MessageService, useValue: messageServiceSpyObj },
        HttpTestingController,
        FormBuilder,
      ],
      declarations: [PostsComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    component.filterForm = formBuilder.group({
      filter: new FormControl({ value: ["mock"] }),
    });
    messageServiceSpyObj.add.calls.reset();
    messageServiceSpyObj = TestBed.inject(MessageService);

    fixture.detectChanges();
  });

  it("should create component when init", () => {
    expect(component).toBeTruthy();
  });

  it("should exist filter element when init component", () => {
    const compiled = fixture.debugElement.nativeElement;
    const filterInput = compiled.querySelector('input[id="filter"]');
    expect(filterInput).toBeTruthy();
  });

  it("should existe Table element when init component", () => {
    const compiled = fixture.debugElement.nativeElement;
    const tableComponent = compiled.querySelector("p-table");

    expect(tableComponent).toBeTruthy();
  });

  it("should existe Edit Post container element when init component", () => {
    const compiled = fixture.debugElement.nativeElement;
    const editPostContainer = compiled.querySelector("new-edit-post");

    expect(editPostContainer).toBeTruthy();
  });

  it("should existe Detail post container element when init component", () => {
    const compiled = fixture.debugElement.nativeElement;
    const detailPostContainer = compiled.querySelector("detail-post");

    expect(detailPostContainer).toBeTruthy();
  });

  it("should existe Notifications container element when init component", () => {
    const compiled = fixture.debugElement.nativeElement;
    const notificationContainer = compiled.querySelector("p-toast");

    expect(notificationContainer).toBeTruthy();
  });

  it("should call to getting post when init component", async () => {
    await component.ngOnInit();
    expect(MockApiHandlerService.getPosts()).toBeTruthy();
  });

  it("Should getting posts list when init component", async () => {
    expect(MockApiHandlerService.getPosts).toHaveBeenCalled();
  });

  it("should filter posts when input filter has changed", async () => {
    const compiled = fixture.debugElement.nativeElement;
    const filterInput = compiled.querySelector('input[id="filter"]');
    filterInput.value = "qui est esse";
    filterInput.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(
        component.postsFiltered.filter((post: any) =>
          post.title.includes(filterInput.value)
        ).length
      ).toEqual(1);
    });
  });

  it("should filter posts when input filter has reset", async () => {
    const compiled = fixture.debugElement.nativeElement;
    const filterInput = compiled.querySelector('input[id="filter"]');
    filterInput.value = "";
    filterInput.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.postsFiltered.length).toEqual(2);
    });
  });

  it("Should notification of post created when close post EDIT modal", async () => {
    component.onCreateOrEditSuccess({ save: true });
    expect(messageServiceSpyObj.add).toHaveBeenCalledOnceWith({
      severity: "success",
      detail: "Post update successfully",
    });
  });

  it("Should notification of post created when close post CREATE modal", async () => {
    component.onCreateOrEditSuccess({ created: true });
    expect(messageServiceSpyObj.add).toHaveBeenCalledOnceWith({
      severity: "success",
      detail: "Post created successfully",
    });
  });
});
