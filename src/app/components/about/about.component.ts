import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {


  constructor(public dictionary:LanguageService){
    // language interception becouse the was saved as one string  
  }
  changeLang(lang:string):string[]{
   return  lang === "ar"? this.dictionary.aboutHollatMainPargraph.ar.split(".") : this.dictionary.aboutHollatMainPargraph.en.split(".")
  }
}