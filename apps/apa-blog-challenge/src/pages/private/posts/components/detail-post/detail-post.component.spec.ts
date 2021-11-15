import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DetailPostComponent } from "./detail-post.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("DetailPostComponent", () => {
  let component: DetailPostComponent;
  let fixture: ComponentFixture<DetailPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailPostComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
