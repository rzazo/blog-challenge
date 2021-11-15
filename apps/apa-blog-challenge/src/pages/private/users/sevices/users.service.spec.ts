import { TestBed } from "@angular/core/testing";

import { UsersService } from "./users.service";
import { HttpClientModule } from "@angular/common/http";
import { UsersServiceRemote } from "./users.service.remote";

describe("PostsService", () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UsersServiceRemote],
    });
    service = TestBed.inject(UsersService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
