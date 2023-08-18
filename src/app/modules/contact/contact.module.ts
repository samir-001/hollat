import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from 'src/app/components/contact-form/contact-form.component';
import { Routes ,RouterModule } from '@angular/router';
import { ContactComponent } from 'src/app/pages/contact/contact.component';
import { FormsModule } from '@angular/forms';


const routes:Routes = [
  {path:"",component:ContactComponent}
]
@NgModule({
  declarations: [
    ContactFormComponent,
    ContactComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class ContactModule { }
