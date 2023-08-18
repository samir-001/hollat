import { Injectable } from '@angular/core';
import { featuresData } from '../utils/projectdata/featuresData';
import { Feature } from '../modals/feature';
@Injectable({
  providedIn: 'root'
})
export class FeaturesService {
public featuresData!:Feature[];
public mainFeature!:Feature[];
  constructor() {
    this.featuresData = featuresData
    this.mainFeature = featuresData.filter((item)=>{
      return item.type === "main"
    })
   }
}
