import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {


  constructor(public dictionary:LanguageService,private router:Router){
    window.screenTop =0
  }
  changeLang(lang:string):string[]{
   return  lang === "ar"? this.dictionary.aboutHollatMainPargraph.ar.split(".") : this.dictionary.aboutHollatMainPargraph.en.split(".")
  }
   navTo(link:string){ 
    this.router.navigate(['/',link])

  }
}