import { Component, OnInit } from '@angular/core';
import {catagories} from "../../shared/constants";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BlogPostService } from "../../services/blog-post/blog-post.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-blog-creation',
  templateUrl: './blog-creation.component.html',
  styleUrls: ['./blog-creation.component.scss']
})
export class BlogCreationComponent implements OnInit {
  catagories = catagories;

  showValidationErros: boolean = false;
  files: File[] = [];
  items: string[];

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  blogPostForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    file: ['', Validators.required],
    fileSource: ['', Validators.required]
  });
  constructor(private blogPostService: BlogPostService, private router: Router, private fb: FormBuilder) {
    this.items = ['All', 'Technology', 'Sports', 'Programming', 'Something', 'Anything']; }

  ngOnInit(): void {
  }

    onFileChange(event: any): void {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.blogPostForm.patchValue({
          fileSource: file
        });
        console.log('file', file)
        console.log('fileSource', this.blogPostForm.get('fileSource'))
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

      console.log(body);

      this.blogPostService.addGallery(body, body.file).subscribe(val=>{
        this.router.navigate(['/blog'])
      });
    }


}

