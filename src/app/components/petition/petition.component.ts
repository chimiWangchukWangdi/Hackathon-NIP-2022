import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetitionService } from 'src/app/services/petition/petition.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-petition',
  templateUrl: './petition.component.html',
  styleUrls: ['./petition.component.scss']
})
export class PetitionComponent implements OnInit {
  id: string = '';
  petition: any;
  petitions: any;
  comments: any;

  signatureForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required],
    comments: ['', Validators.required],
  });

  showValidationErros: boolean = false;


  constructor(private petitionService: PetitionService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.petitionDetail();
  }

  convertDate(date: string){
    return new Date(date).toDateString()
  }

  petitionDetail(): void{
    this.petitionService.getAPost(this.id).subscribe(petition => {
      this.petition = petition;
      this.comments = this.petition.comments
      console.log(this.comments[0].user.profile)
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
      comments: form.value.comments,
      email: form.value.email,
      name: form.value.name,
      address: form.value.address,
      petitionId: this.petition._id
    }
  console.log(body)

    this.petitionService.postSignature(body).subscribe(val=>console.log(val));
    form.reset();
  }

}
