import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent  {
  data:any

  profileForm: FormGroup;
  constructor(){
    this.profileForm = new FormGroup({
      name:new FormControl("",[Validators.required]),
      price:new FormControl(""),
      quantity:new FormControl(""),
    })
  
  }

  sub(){

  }


}
