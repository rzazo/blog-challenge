import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NoContentComponent } from "./no-content.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("NoContentComponent", () => {
  let component: NoContentComponent;
  let fixture: ComponentFixture<NoContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoContentComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
