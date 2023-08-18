import { Component, Input } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
@Input() isExtendable:boolean = false
@Input() cardTitle:string ='' ;
@Input() cardContent:string ='';
@Input() cardIcon:string  ='';
@Input() cardExtendedContent:string[] = [] ;
public isOpen:boolean = false;
changeCardOPening(){
  this.isOpen = !this.isOpen
}
constructor(public dictionary:LanguageService){}
}
