import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent {
  constructor(public dictionary:LanguageService,private router:Router){

  }
  navTo(link:string){
    this.router.navigate([`/${link}`])
  }

}
