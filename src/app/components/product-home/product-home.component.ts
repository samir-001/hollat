import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Mainproduct, subproduct } from 'src/app/modals/products';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss']
})
export class ProductHomeComponent implements OnDestroy{
  
  allProduct :Subscription;
  data:Mainproduct[] = {}as Mainproduct[]

  constructor(private product:ProductsService,private router:Router){
    this.allProduct = this.product.getProducts().subscribe((dt:any[])=>{
      this.data = dt
    })
  }
  goToProd(id:Number){
    this.router.navigate([`/product`,id])
  }

  ngOnDestroy(): void {
    this.allProduct.unsubscribe()
  }
}
