import { Component, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  public isTopZero:boolean = true ;
  public showNavBar:boolean = false;
  public curtain:boolean = false;
  public scrWidth:any;
  public cutainContent!:string
  
   @HostListener('window:resize', ['$event'])
   getScreenSize() {
         this.scrWidth = window.innerWidth;
         console.log( this.scrWidth);
   }
  constructor(public dictionary:LanguageService){

    this.getScreenSize()
    fromEvent(window,"scroll").subscribe(()=>{
      this.isTopZero = window.scrollY < 61 ? true :false
    })

  }
  toggleNav():void{
  this.showNavBar = !this.showNavBar
 }
  toggleCurtain():void{
  this.curtain = !this.curtain
 }
 closeNav():void{
  this.showNavBar = false
 }
 curtainContent(value:string){
  this.cutainContent = value
 }

}
