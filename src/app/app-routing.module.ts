import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:"full"}
  ,{path:"home",component:HomeComponent}
  ,{path:"product/add",component:ProductFormComponent}
  ,{path:"product/:id",component:ProductComponent}
  ,{path:"**",redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
