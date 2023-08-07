import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Mainproduct } from 'src/app/modals/products';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnDestroy {
  req:Subscription
  public item:Mainproduct = {} as Mainproduct;

 constructor(private product:ProductsService, private route:ActivatedRoute){
   this.req=  product.getProduct(this.route.snapshot.params?.['id']).subscribe((data)=>{
    this.item = data
  })
 } 
  ngOnDestroy(): void {
    this.req.unsubscribe()
  }


}
