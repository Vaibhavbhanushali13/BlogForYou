import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeletePostComponent } from './update-delete-post.component';

describe('UpdateDeletePostComponent', () => {
  let component: UpdateDeletePostComponent;
  let fixture: ComponentFixture<UpdateDeletePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDeletePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeletePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
