import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DetailUserComponent } from "./detail-user.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("DetailPostComponent", () => {
  let component: DetailUserComponent;
  let fixture: ComponentFixture<DetailUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailUserComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
