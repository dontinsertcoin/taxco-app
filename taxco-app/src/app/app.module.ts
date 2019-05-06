import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { NavigatorComponent } from './components/shared/navigator/navigator.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductComponent } from './components/shop/product/product.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { Image } from './components/shared/image/image.component';

import { ImageService } from './services/images/image.service';
import { AuthService } from './services/auth/auth.service';
import { LoginComponent } from './components/shared/auth/login/login.component';
import { RegisterComponent } from './components/shared/auth/register/register.component';
import { ShoppingCartComponent } from './components/shop/shopping-cart/shopping-cart.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { ModalService } from './services/modal/modal.service';
import { AuthComponent } from './components/shared/auth/auth.component';
import { LogoutComponent } from './components/shared/auth/logout/logout.component';
import { OrderComponent } from './components/order/order.component';
import { PersonalAreaComponent } from './components/shared/personal-area/personal-area.component';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'gallery', component: GalleryComponent}, 
  {path: 'trophies', component: GalleryComponent}, 
  {path: 'shop', component: ShopComponent},
  {path: 'aboutUs', component: ContactComponent},
  {path: 'personalArea', component: PersonalAreaComponent},
  {path: '**', component: NotFoundPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    HomePageComponent,
    FooterComponent,
    GalleryComponent,
    ShopComponent,
    ProductComponent,
    ContactComponent,
    Image,
    NotFoundPageComponent,
    LoginComponent,
    RegisterComponent,
    ShoppingCartComponent,
    ModalComponent,
    AuthComponent,
    LogoutComponent,
    OrderComponent,
    PersonalAreaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(
      environment.firebaseConfig
    ),
    AngularFireAuthModule ,    
    RouterModule.forRoot(
      appRoutes,
      { 
        enableTracing: true // <-- debugging purposes only
      }),     
  ],
  providers: [ 
    ImageService,
    AngularFirestore,
    AuthService,
    ModalService
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
