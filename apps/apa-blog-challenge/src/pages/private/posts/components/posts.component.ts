import {Component, OnInit} from '@angular/core';
import {PostsService} from "../sevices/posts.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UsersService} from "../../users/sevices/users.service";
import {MessageService} from "primeng/api";

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
    public filterForm: FormGroup;
    public postsData: any = [];
    public postsFiltered: any = [];

    public detailPost: any = null;
    public displayDetailPost: boolean = false;

    constructor(
        private readonly postsService: PostsService,
        private readonly usersSerivce: UsersService,
        private readonly formBuilder: FormBuilder,
        private readonly messageService: MessageService
    ) {
        this.filterForm = this.formBuilder.group({
            filter: [null, []]
        });

        this.filterForm.valueChanges.subscribe(({filter}) => {
            if (!!filter) {
                this.postsFiltered = this.postsData.filter((post: any) =>
                    post.title.includes(filter) ||
                    post.body.includes(filter)
                );
            } else {
                this.postsFiltered = this.postsData;
            }
        })
    }

    public async ngOnInit() {
        await this.getPosts();
    }

    public async getPosts() {
        this.postsData = await this.postsService.getPosts();
        this.postsFiltered = this.postsData;
    }

    public async openNewOrEditPostDialog(post: any) {
        await this.postsService.setActivePost(post);
    }

    public onCreateOrEditSuccess({save = null, created = null}) {
        if (save) {
            this.messageService.add({
                severity: 'success',
                detail: 'Post update successfully'
            });
        } else if (created) {
            this.messageService.add({
                severity: 'success',
                detail: 'Post created successfully'
            });
        }
    }

    public async closeModal() {
        await this.openNewOrEditPostDialog(null);
    }

    public async openDetailPost(postId: any) {
        this.detailPost = await this.postsService.getPostsById(postId);
        this.displayDetailPost = !!this.detailPost;
    }

    public closeDetailPost() {
        this.detailPost = null;
    }
}
