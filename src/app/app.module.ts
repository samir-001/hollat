import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { FormsModule } from '@angular/forms';

// import function to register Swiper custom elements
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { InputGroupComponent } from './components/input-group/input-group.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './pages/product/product.component';

// register Swiper custom elements

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    JumbotronComponent,
    HomeComponent,
    ProductHomeComponent,
    ProductFormComponent,
    InputGroupComponent,
    FooterComponent,
    ProductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
