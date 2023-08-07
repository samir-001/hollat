import { Component ,Input, OnInit} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:InputGroupComponent,
      multi:true
  
    }
  ]
})
export class InputGroupComponent implements OnInit,ControlValueAccessor{
  value!:string
  Onchange!: (value:string)=>void 
  writeValue(obj: any): void {
     this.value= obj
  }
  registerOnChange(fn: any): void {
    this.Onchange = fn
  }
  registerOnTouched(fn: any): void {}
  ngOnInit(): void {}

  @Input() placeholder:string ='';
  @Input() err:any
  @Input() type:string="";
  @Input() label:string="";
  @Input() form:any
  @Input() name!:string 
}
