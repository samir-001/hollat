import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent {
  constructor(public dictionary:LanguageService,private router:Router){

  }
  navTo(link:string){ 
    this.router.navigate(['/',link])

  }
}
