import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { ImageService } from 'src/app/services/images/image.service';
import { ProductComponent } from '../../shop/product/product.component';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {


  private showMobileMenu : boolean= false;
  private address : string;

  constructor(public authService: AuthService, 
      private modalService: ModalService, 
      public productService: ProductsService,
      private ordersService: OrdersService,
      private imageService: ImageService) { 

  }

  ngOnInit() {
    this.imageService.displayImageEvent.subscribe((data: string) => {
      this.modalService.open("image-display");
    })
  }

  showMenu(){
    let navbar = document.getElementById('navbar');
    let logo = document.getElementById('logo');
    let logoImg = document.getElementById('logo-img');
    let navigationBar = document.getElementById('navigation-bar');
    let navigationList = document.getElementById('navigation-list');
    if (!this.showMobileMenu){
      this.showMobileMenu=true;
      navigationBar.className=""; 
      navigationList.className="";
      navbar.classList.remove('scrolled');
      logo.classList.remove('scrolled-logo');
      logoImg.classList.remove('scrolled-logo');
    }else{
      this.showMobileMenu=false;
    }
  }

  @HostListener("window:scroll", ['$event'])
  userHasScrolled($event:Event){
    let scrollOffset = (<HTMLInputElement>event.srcElement).children[0].scrollTop;
    let navbar = document.getElementById('navbar');
    let logo = document.getElementById('logo');
    let logoImg = document.getElementById('logo-img');
    let navigationBar = document.getElementById('navigation-bar');
    let navigationList = document.getElementById('navigation-list');
    if (!this.showMobileMenu){
      if (scrollOffset > 30){     
        navigationBar.className="navigation-bar"; 
        navigationList.className="navigation-list"; 
        navbar.classList.add('scrolled');
        logo.classList.add('scrolled-logo');
        logoImg.classList.add('scrolled-logo');
      } else {
        navigationBar.className=""; 
        navigationList.className="";
        navbar.classList.remove('scrolled');
        logo.classList.remove('scrolled-logo');
        logoImg.classList.remove('scrolled-logo');
      }
    }
  }
  
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  confirmBuy(){
    if (this.address != null || this.address === ""){
      this.ordersService.confirmOrder(this.address);
      this.modalService.close('shopping-cart-modal');
      this.modalService.textSuccess = "Pedido realizado con éxito";
      this.modalService.open('success-modal');
      setTimeout(() => this.modalService.close('success-modal'), 2500);
      this.productService.shoppingCart= new Map();
      this.productService.totalPrice = 0;
    } else {
      this.modalService.close("shopping-cart-modal");
      this.modalService.textError = "Por favor, introduzca una dirección válida.";
      this.modalService.open("error-modal");
      setTimeout(() => this.modalService.close('error-modal'), 2500);      
    }    
  }

  nextImage(){
    let images = this.imageService.imagesFiltered;
    if (this.imageService.imageSelectedIndex === (images.length -1)){
      this.imageService.imageSelectedIndex= 0;
      this.imageService.imageSelected= images[this.imageService.imageSelectedIndex];
    }else{
      this.imageService.imageSelectedIndex++;
      this.imageService.imageSelected= images[this.imageService.imageSelectedIndex];
    }
  }

  previousImage(){
    let images = this.imageService.imagesFiltered;
    if (this.imageService.imageSelectedIndex === 0){
      this.imageService.imageSelectedIndex= images.length-1;
      this.imageService.imageSelected= images[this.imageService.imageSelectedIndex];
    }else{
      this.imageService.imageSelectedIndex--;
      this.imageService.imageSelected= images[this.imageService.imageSelectedIndex];
    }   
  }

  deleteProduct(product : ProductComponent){
    this.productService.deleteProductFromCart(product);
  }

}
