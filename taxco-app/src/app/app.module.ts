import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LightboxModule } from 'ngx-lightbox';

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
import { ImageService } from './gallery/image/shared/image.service';
import { Image } from './gallery/image/image.component';

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
    Image
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    LightboxModule    
  ],
  providers: [ ImageService ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
