import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from '../../pages/about-page/about-page.component';
import { SharedModule } from '../shared/shared.module';


const routes:Routes = [
{path:"",component:AboutPageComponent}
]
@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AboutModule { }
