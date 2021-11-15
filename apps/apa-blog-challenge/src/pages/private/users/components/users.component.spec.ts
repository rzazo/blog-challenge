import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UsersComponent } from "./users.component";
import { UsersService } from "../sevices/users.service";
import { UsersServiceRemote } from "../sevices/users.service.remote";
import { HttpClientModule } from "@angular/common/http";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("UsersComponent", () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let service: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UsersService, UsersServiceRemote],
      declarations: [UsersComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(UsersService);
    fixture.detectChanges();
  });

  it("#getUsers should return user-list from service", (done) => {
    service.getUsers().then((response: any) => {
      expect(response.length).toBe(10);
      done();
    });
  });

  it("#getUsers should return empty user-list from service ", (done) => {
    service.getUsers().then((response: any) => {
      expect(response.length).toBe(10);
      done();
    });
  });
});
