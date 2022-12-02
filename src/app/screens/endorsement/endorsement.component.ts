import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EndorsementService } from 'src/app/services/endorsement/endorsement.service';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-endorsement',
  templateUrl: './endorsement.component.html',
  styleUrls: ['./endorsement.component.scss']
})
export class EndorsementComponent implements OnInit {
  id: string = '';
  endoresement: any;
  comments: any;
  endorsementPosts: any;
  endorsementPost: any;
  showValidationErros: boolean = false;

  signatureForm = this.fb.group({
    email: ['', Validators.required],
    comment: ['', Validators.required]
  });

  constructor(private endorsementService: EndorsementService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.endorsementDetail();
  }
   convertDate(date: string){
    return new Date(date).toDateString()
  }
  endorsementDetail(): void{
    this.endorsementService.getAPost(this.id).subscribe(endoresement => {
      this.endoresement = endoresement;
      this.comments = this.endoresement.comments;
      console.log(this.comments)
      console.log(this.endoresement)
    });
  }

  onFormSubmit(form: FormGroup) {
    if (!form.valid) {
      this.showValidationErros = true;
      console.log('form is invalid');
      return;
    };
    this.showValidationErros = false;

    const body = {
      email: form.value.email,
      comment: form.value.comment,
      endorsementId: this.endoresement._id
    }
  console.log(body)

    this.endorsementService.endorsePost(body).subscribe(val=>console.log(val));
    form.reset();
  }

}
