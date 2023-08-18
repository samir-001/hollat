import { Component, ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public carouselWidth!:Number | undefined
  public fullWidth!:Number | undefined
  constructor(private router:Router){


   
    
  }


  

  
}
