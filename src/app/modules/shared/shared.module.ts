import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from 'src/app/components/card/card.component';
import { MatIconModule } from '@angular/material/icon';
import { CallToActionComponent } from 'src/app/components/call-to-action/call-to-action.component';

@NgModule({
  declarations: [
    CardComponent,
    CallToActionComponent
    

  ],
  imports: [
    MatIconModule,
    CommonModule
  ],
  exports:[
    CardComponent,
    CallToActionComponent
  ]
})
export class SharedModule { }
