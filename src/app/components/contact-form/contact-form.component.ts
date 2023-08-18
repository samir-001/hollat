import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent {
  public contact!:any
  constructor(public dictionary:LanguageService){
    this.contact ={
      firstName:'',
      lastName:'',
      phone:null,
      email:"",
      subject:"",
      message:''

    } 
  }
  onSubmit(){
    console.log(this.contact)
  }
}
