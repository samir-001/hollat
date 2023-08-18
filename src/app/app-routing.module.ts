import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:"full"}
  ,{path:"about", loadChildren:()=>import('src/app/modules/about/about.module').then((m)=>m.AboutModule)}
  ,{path:"features", loadChildren:()=>import('src/app/modules/features/features.module').then((m)=>m.FeaturesModule)}
  ,{path:"contact", loadChildren:()=>import('src/app/modules/contact/contact.module').then((m)=>m.ContactModule)}
  ,{path:"home",component:HomeComponent}
  ,{path:"**",redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
