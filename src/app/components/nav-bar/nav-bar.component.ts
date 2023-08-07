import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  public showNavBar:boolean = false
  constructor(){
  }
  toggleNav():void{
  this.showNavBar = !this.showNavBar
 }
 closeNav():void{
  this.showNavBar = false
 }

}
