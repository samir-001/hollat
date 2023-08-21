import { Component, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent {
  public scrWidth:any;

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
        this.scrWidth = window.innerWidth;
        console.log( this.scrWidth);
  }


  constructor(public dictionary:LanguageService){

        this.getScreenSize();

}
}
