import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';

// import function to register Swiper custom elements
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingComponent } from './components/loading/loading.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { AboutComponent } from './components/about/about.component';
import { MainFeaturesComponent } from './components/main-features/main-features.component';
import { ScreensComponent } from './components/screens/screens.component';
import { ServicesComponent } from './components/services/services.component';
import { ScreenItemComponent } from './components/screen-item/screen-item.component';
import { SharedModule } from './modules/shared/shared.module';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    LoadingComponent,
    JumbotronComponent,
    AboutComponent,
    MainFeaturesComponent,
    ScreensComponent,
    ServicesComponent,
    ScreenItemComponent,
    ContactInfoComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
    
  ],
  exports:[
  ]
  ,
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
