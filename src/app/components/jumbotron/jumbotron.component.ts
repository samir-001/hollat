import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent {
  constructor(public dictionary:LanguageService,private router:Router,private trnslateService:TranslateService){
    this.trnslateService.setDefaultLang(localStorage.getItem('lang') || 'ar')
    this.trnslateService.use(localStorage.getItem('lang') || 'ar')
  }
  navTo(link:string){
    this.router.navigate([`/${link}`])
  }

}
