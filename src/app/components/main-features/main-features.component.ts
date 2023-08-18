import { Component } from '@angular/core';
import { FeaturesService } from 'src/app/services/features.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-main-features',
  templateUrl: './main-features.component.html',
  styleUrls: ['./main-features.component.scss']
})
export class MainFeaturesComponent {
  constructor(public dictionary:LanguageService,public featureData:FeaturesService ){
    console.log(featureData.mainFeature)
  }
}
