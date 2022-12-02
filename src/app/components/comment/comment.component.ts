import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from 'src/app/services/comment/comment.service';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() id: any;
  @Input() type: string;
  @Input() refresh:any;

  commentForm = this.fb.group({
    comment: ['', Validators.required],
    rating: []
  });
  showValidationErros: boolean = false;

  constructor(private fb: FormBuilder,  private commentService: CommentService) { }

  ngOnInit(): void {
  console.log(this.type)
  }

  onFormSubmit(form: FormGroup) {
    if (!form.valid) {
     this.showValidationErros = true;
     return;
    };
    this.showValidationErros = false;


    console.log(form.value.rating )
    var endorsementBody = {
      endorsementId: this.id,
      comment: form.value.comment,
      rating: form.value.rating
    }
    var petitionBody = {
      petitionId: this.id,
      comment: form.value.comment,
      rating: form.value.rating
    }
    var postBody = {
      petitionId: this.id,
      comment: form.value.comment,
      rating: form.value.rating
    }

    switch (this.type) {
      case "endorsement": {
        this.commentService.commentEndorsement(endorsementBody).subscribe(response => {
          console.log(response)
          this.refresh()
        })
        break;
      }

      case "petition": {
        this.commentService.commentPetition(petitionBody).subscribe(response => {
          console.log(response)
          this.refresh()
        })
        break;
      }

      case "blog": {
        this.commentService.commentPost(postBody).subscribe(response => {
          console.log(response)
          this.refresh()
        })
        break;
      }


    }
    form.reset();
  }

}
