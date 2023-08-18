import { Injectable } from '@angular/core';
import { Screen } from './modals/screen';
import { screensData } from './utils/projectdata/screensData';
@Injectable({
  providedIn: 'root'
})
export class ScreensService {
  public Screens:Screen[]
  constructor() {
    this.Screens = screensData;
   }

 
}
