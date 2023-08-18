import { Component } from '@angular/core';
import { LoadingService } from './services/loading.service';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hollat';
  constructor(public loading:LoadingService,public dictionary:LanguageService){
  }
}
