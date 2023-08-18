import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFeaturePageComponent } from 'src/app/pages/main-feature-page/main-feature-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



const routes:Routes =[
  {path:'',component:MainFeaturePageComponent}
]
@NgModule({
  declarations: [
    MainFeaturePageComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
    
  ]
})
export class FeaturesModule { }
