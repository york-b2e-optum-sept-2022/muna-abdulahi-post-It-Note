import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostItNotesComponent } from './post-it-notes.component';

describe('PostItNotesComponent', () => {
  let component: PostItNotesComponent;
  let fixture: ComponentFixture<PostItNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostItNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostItNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
