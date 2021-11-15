import { HttpModule } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

export const user1 = {
  address: {
    city: "Gwenborough",
    geo: { lat: "-37.3159", lng: "81.1496" },
    street: "Kulas Light",
    suite: "Apt. 556",
    zipcode: "92998-3874",
  },
  company: {
    bs: "harness real-time e-markets",
    catchPhrase: "Multi-layered client-server neural-net",
    name: "Romaguera-Crona",
  },
  email: "Sincere@april.biz",
  id: 1,
  name: "Leanne Graham",
  phone: "1-770-736-8031 x56442",
  username: "Bret",
  website: "hildegard.org",
};

export const user2 = {
  address: {
    city: "Gwenborough",
    geo: { lat: "-37.3159", lng: "81.1496" },
    street: "Kulas Light",
    suite: "Apt. 556",
    zipcode: "92998-3874",
  },
  company: {
    bs: "real-time e-markets",
    catchPhrase: "Multi-layered client-server neural-net",
    name: "Crona",
  },
  email: "diane@molin.biz",
  id: 2,
  name: "Diane Molin",
  phone: "1-770-735-8031 x56442",
  username: "Didi",
  website: "molin.org",
};

describe("User Controller", () => {
  let usersController: UsersController;
  let app: TestingModule;
  const usersService = {
    getAll: () => {
      return Promise.resolve({
        data: [user1, user2],
      });
    },
    getUserById: () => {
      return Promise.resolve({
        data: user2,
      });
    },
  };

  beforeEach(async () => {
    app = await Test.createTestingModule({
      imports: [
        HttpModule.register({
          timeout: 5000,
          maxRedirects: 5,
        }),
      ],
      controllers: [UsersController],
      providers: [UsersService],
      exports: [UsersService],
    })
      .overrideProvider(UsersService)
      .useValue(usersService)
      .compile();

    usersController = app.get<UsersController>(UsersController);
  });

  afterAll(() => {
    app.close();
  });

  describe("UserController tests", () => {
    it("should return all the users", async () => {
      const all = await usersController.getAll();
      expect(all).toStrictEqual([user1, user2]);
    });
    it("should return users by id", async () => {
      const user = await usersController.getUserById("2");
      expect(user).toStrictEqual(user2);
    });
  });
});
