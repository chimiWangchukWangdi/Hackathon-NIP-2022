import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EndorsementService } from 'src/app/services/endorsement/endorsement.service';
import {catagories} from "../../shared/constants";
import { Router } from "@angular/router";

@Component({
  selector: 'app-post-endorsement',
  templateUrl: './post-endorsement.component.html',
  styleUrls: ['./post-endorsement.component.scss']
})
export class PostEndorsementComponent implements OnInit {

  categories = catagories;

  endorsementForm = this.fb.group({
    title: ['', Validators.required],
    goal: ['', Validators.required],
    description: ['', Validators.required],
    file: ['', Validators.required],
    fileSource: ['', Validators.required]
  });

  showValidationErros: boolean = false;

  checked() {
    const checkBox = document.getElementById("checked") as HTMLInputElement | null;
    const text = document.getElementById("partnerForm") as HTMLInputElement;
    if (checkBox?.checked) {
      text.style.display = "flex";
    } else {
      text.style.display = "none";
    }
  }


  constructor(private fb: FormBuilder, private endorsementService: EndorsementService, private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }



  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.endorsementForm.patchValue({
        fileSource: file
      });
      console.log('file', file)
      console.log('fileSource', this.endorsementForm.get('fileSource'))
    }
  }

  onFormSubmit(form: FormGroup) {
    if (!form.valid) {
     this.showValidationErros = true;
     console.log('form is invalid');
     return;
    };
    this.showValidationErros = false;

     const body = {
      title: form.value.title,
      goal: form.value.goal,
      description: form.value.description,
      file: form.value.fileSource
    }

    this.endorsementService.addGallery(body, body.file).subscribe(val=>{
      this.router.navigate(['/endorsement'])
    });
  }



}
