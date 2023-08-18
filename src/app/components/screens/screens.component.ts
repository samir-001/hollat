import { Component } from '@angular/core';
import { ScreensService } from 'src/app/screens.service';
import { LanguageService } from 'src/app/services/language.service';
import { Screen } from 'src/app/modals/screen';
@Component({
  selector: 'app-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.scss']
})
export class ScreensComponent {
  public screens:Screen[]
  public activeItem!:string 
  constructor(public dictionary:LanguageService,public screensData:ScreensService){
    
   this.screens = this.screensData.Screens;
   this.activeItem = "all"
  }

  setActiveFn(type:string):void{
    this.activeItem = type
  }

}
