import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEndorsementComponent } from './post-endorsement.component';

describe('PostEndorsementComponent', () => {
  let component: PostEndorsementComponent;
  let fixture: ComponentFixture<PostEndorsementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostEndorsementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEndorsementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
