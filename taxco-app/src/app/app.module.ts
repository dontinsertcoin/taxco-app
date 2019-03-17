import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { NavigatorComponent } from './navigator/navigator.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ShopComponent } from './shop/shop.component';
import { ShopItemComponent } from './shop/shop-item/shop-item.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ImageService } from './gallery/image/shared/image.service';
import { Image } from './gallery/image/image.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';


const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'gallery', component: GalleryComponent}, 
  {path: 'trophies', component: GalleryComponent}, 
  {path: 'shop', component: ShopComponent},
  {path: '**', component: NotFoundPageComponent}
]


import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    HomePageComponent,
    FooterComponent,
    GalleryComponent,
    ShopComponent,
    ShopItemComponent,
    ContactComponent,
    Image,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp({     
      apiKey: "AIzaSyCn8R5ojJ4IXqwpBseAR2tbiQoF4D3pev4",
      authDomain: "taxco-app.firebaseapp.com",
      databaseURL: "https://taxco-app.firebaseio.com",
      projectId: "taxco-app",
      storageBucket: "taxco-app.appspot.com",
      messagingSenderId: "3588211874"  
    }),
    AngularFireAuthModule ,
    RouterModule.forRoot(
      appRoutes,
      { 
        enableTracing: true // <-- debugging purposes only
      }),     
  ],
  providers: [ 
    ImageService,
    AuthService
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
