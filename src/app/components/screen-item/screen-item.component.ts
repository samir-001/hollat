import { Component, Input } from '@angular/core';
import { Screen } from 'src/app/modals/screen';
import { LanguageService } from 'src/app/services/language.service';
@Component({
  selector: 'app-screen-item',
  templateUrl: './screen-item.component.html',
  styleUrls: ['./screen-item.component.scss']
})
export class ScreenItemComponent {

  constructor(public dictionary:LanguageService){
  }
@Input() data!:Screen
@Input() active!:string
}
