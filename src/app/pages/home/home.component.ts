import { Component, ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { Mainproduct } from 'src/app/modals/products';
import { Subscription, fromEvent } from 'rxjs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy{
  obs:Subscription
  public data!:Mainproduct[]
  public carouselWidth!:Number | undefined
  public fullWidth!:Number | undefined
  constructor(private products:ProductsService ,private router:Router){


    //geting data from database
    this.obs = this.products.getProducts().subscribe((data:any)=>{
      this.data = data;
    })

    // geting carousel width
      fromEvent(window,'load').subscribe(()=>{
        this.carouselWidth = document.getElementById("lastVisitCarousel")?.offsetWidth
        this.fullWidth =  document.getElementById("lastVisitCarousel")?.scrollWidth 
      })
      fromEvent(window,'resize').subscribe(()=>{
        this.carouselWidth = document.getElementById("lastVisitCarousel")?.offsetWidth
        this.fullWidth =  document.getElementById("lastVisitCarousel")?.scrollWidth 
      })

    
  }

//get carousel element
 @ViewChild('lastVisitCarousel') lastVisitCarousel!:ElementRef
 @ViewChild('mostVisit') mostVisit!:ElementRef

  goToProd(id:Number){
    console.log(id)
    this.router.navigate([`/product`,id])
  }

  scroll(name:string,direction:string){
    const target:ElementRef = name === "lastVisitCarousel" ? this.lastVisitCarousel : this.mostVisit;
 

    if( (Number(this.fullWidth) - Number(target.nativeElement.scrollLeft )-5  <= Number(this.carouselWidth)) && direction === "next" )
    {
      target.nativeElement.scrollTo({ left:0, behavior: 'smooth' });
    }
    else if ((Number(this.fullWidth) - Number(target.nativeElement.scrollLeft )-5  >= Number(this.carouselWidth)) && direction === "next" )
    {
      target.nativeElement.scrollTo({ left:(target.nativeElement.scrollLeft + this.carouselWidth ), behavior: 'smooth' });
    }
    else if (Number(target.nativeElement.scrollLeft )-5  <= 0 && direction === "prev" )
    {
      console.log(123)
      target.nativeElement.scrollTo({ left:(Number(this.fullWidth) - Number(target.nativeElement.scrollLeft )), behavior: 'smooth' });
    }
    else if (Number(this.fullWidth) - Number(target.nativeElement.scrollLeft )-5  >= 0 && direction === "prev" )
    {
      target.nativeElement.scrollTo({ left:(target.nativeElement.scrollLeft - Number(this.carouselWidth) ), behavior: 'smooth' });
    }


  }
  
  ngOnDestroy(): void {
    this.obs.unsubscribe()
  }

}
