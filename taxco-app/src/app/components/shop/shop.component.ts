import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { ProductComponent } from './product/product.component';
import { ModalComponent } from '../shared/modal/modal.component'
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  public products: Array <ProductComponent> = [];
  public shoppingCart: Map <ProductComponent, Number>= new Map();
  public modalComponent: ModalComponent;

  public auxNumber: Number;

  constructor(private productService: ProductsService, private modalService: ModalService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe( products => {
      console.log('PRODUCTS', products);
      this.products = products;
    })
  }

  addToCart(item: ProductComponent) {
    if ((item.quantity) > 0){
      if (this.shoppingCart.has(item)){
        this.auxNumber = this.shoppingCart.get(item).valueOf() + 1;
        this.shoppingCart.delete(item);
        this.shoppingCart.set(item, this.auxNumber);
      } else {
        this.shoppingCart.set(item, 1);
      }
      console.log(this.shoppingCart);
      this.lessQuantity(item);
      //this.modalComponent = new ModalComponent('shoppingCart', this.shoppingCart);
    }    
  }

  removeFromCart(item: ProductComponent) {
    this.shoppingCart.delete(item);
  }

  lessQuantity(item: ProductComponent){
    this.products[this.products.indexOf(item)].quantity = this.products[this.products.indexOf(item)].quantity.valueOf() - 1;
  }

}
