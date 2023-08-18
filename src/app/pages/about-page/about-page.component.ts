import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {
  public showMore!:boolean
  constructor(public dictionary:LanguageService){
    this.showMore = false
  }
  changeLang(lang:string):string[]{
    return  lang === "ar"? this.dictionary.aboutHollatMainPargraph.ar.split(".") : this.dictionary.aboutHollatMainPargraph.en.split(".")
   }
   changeContentVolum():void{
    this.showMore = !this.showMore
    console.log(this.showMore)
   }
}
