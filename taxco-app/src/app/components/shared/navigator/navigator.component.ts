import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {


  private showMobileMenu : boolean= false;

  constructor(public authService: AuthService, 
      private modalService: ModalService, 
      public productService: ProductsService,
      private ordersService: OrdersService) { 

  }

  ngOnInit() {
    //this.authService.logout();
  }

  showMenu(){
    if (!this.showMobileMenu){
      this.showMobileMenu=true;
    }else{
      this.showMobileMenu=false;
    }
  }

  @HostListener("window:scroll", ['$event'])
  userHasScrolled($event:Event){
    let scrollOffset = $event.srcElement.children[0].scrollTop;
    let navbar = document.getElementById('navbar');
    let logo = document.getElementById('logo');
    let logoImg = document.getElementById('logo-img');
    let navigationBar = document.getElementById('navigation-bar');
    let navigationList = document.getElementById('navigation-list');
    //if (!mobileDevice*){
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
    //}
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  confirmBuy(){
    this.ordersService.confirmOrder();
  }

}
