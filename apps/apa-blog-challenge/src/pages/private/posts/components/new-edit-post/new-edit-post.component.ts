import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { PostsService } from "../../sevices/posts.service";
import { MessageService } from "primeng/api";

@Component({
  selector: "new-edit-post",
  templateUrl: "./new-edit-post.component.html",
  styleUrls: ["./new-edit-post.component.scss"],
})
export class NewEditPostComponent implements OnInit {
  @Input() public newPostEnabled: boolean = false;

  @Output() public onReset: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onUpdate: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onSuccess: EventEmitter<any> = new EventEmitter<any>();

  public model: any = {};
  public form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly postsService: PostsService
  ) {
    this.form = this.formBuilder.group({
      id: [null, []],
      userId: [{ value: null, disabled: true }, []],
      userName: [{ value: null, disabled: true }, []],
      title: [null, []],
      body: [null, []],
    });
  }

  ngOnInit(): void {
    this.postsService.activePost$.subscribe((data) => {
      this.model = data;
      this.form.patchValue(this.model);
    });
  }

  public resetForm() {
    this.form.reset();
    this.onReset.emit();
  }

  public updateSavePost(data: any) {
    if (!!this.model?.id) {
      this.updatePost(data);
    } else {
      this.createPost(data);
    }
  }

  public updatePost({ id, userId, title, body }: any) {
    this.postsService.updatePost(id, userId, title, body).then(async () => {
      this.resetForm();
      // TODO : show notification on success
      this.onSuccess.emit({ save: true });

      // TODO : emit for update table posts
    });
  }

  public createPost({ userId, title, body }: any) {
    this.postsService.createPost(userId, title, body).then(async () => {
      this.resetForm();
      // TODO : show notification on success
      this.onSuccess.emit({ created: true });

      // TODO : emit for update table posts
    });
  }
}
