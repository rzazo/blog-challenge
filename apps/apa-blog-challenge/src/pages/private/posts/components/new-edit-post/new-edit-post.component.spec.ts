import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEditPostComponent } from './new-edit-post.component';

describe('NewPostComponent', () => {
  let component: NewEditPostComponent;
  let fixture: ComponentFixture<NewEditPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEditPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEditPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
