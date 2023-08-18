import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  public isTopZero:boolean = true 
  public showNavBar:boolean = false
  constructor(public dictionary:LanguageService){

    fromEvent(window,"scroll").subscribe(()=>{
      this.isTopZero = window.scrollY < 61 ? true :false
    })

  }
  toggleNav():void{
  this.showNavBar = !this.showNavBar
 }
 closeNav():void{
  this.showNavBar = false
 }


}
