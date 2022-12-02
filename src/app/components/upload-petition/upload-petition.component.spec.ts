import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPetitionComponent } from './upload-petition.component';

describe('UploadPetitionComponent', () => {
  let component: UploadPetitionComponent;
  let fixture: ComponentFixture<UploadPetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPetitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
