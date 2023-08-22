import { Component } from '@angular/core';
import { FeaturesService } from 'src/app/services/features.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-main-feature-page',
  templateUrl: './main-feature-page.component.html',
  styleUrls: ['./main-feature-page.component.scss']
})
export class MainFeaturePageComponent {
  constructor(public featureData:FeaturesService,public dictionary:LanguageService){
    window.scrollTo(0,0)
  }
}
