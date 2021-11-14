import {Component, OnInit} from '@angular/core';
import {UsersService} from "../sevices/users.service";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    public usersList: any;

    constructor(
        private readonly usersService: UsersService
    ) {
    }

    public async ngOnInit() {
      this.usersList = await this.usersService.getUsers();
    }

}
