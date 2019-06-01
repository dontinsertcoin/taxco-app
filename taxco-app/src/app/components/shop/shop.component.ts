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
  public modalComponent: ModalComponent;

  public auxNumber: number;

  constructor(private productService: ProductsService, private modalService: ModalService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe( products => {
      console.log('PRODUCTS', products);
      this.products = products;
    })
  }

  addToCart(item: ProductComponent) {
    if ((item.quantity) > 0){
      if (this.productService.shoppingCart.has(item)){
        this.auxNumber = this.productService.shoppingCart.get(item).valueOf() + 1;
        this.productService.shoppingCart.delete(item);
        this.productService.shoppingCart.set(item, this.auxNumber);
      } else {
        this.productService.shoppingCart.set(item, 1);
      }
      this.productService.addToTotalPrice(item.price.valueOf());
      this.lessQuantity(item);
      this.modalService.textSuccess = "Producto añadido al carrito";
      this.modalService.open('success-modal');
    } else {
      this.modalService.textError = "Ups! Parece que no disponemos de más unidades del artúclo seleccionado";
      this.modalService.open('error-modal');
    }   
  }

  removeFromCart(item: ProductComponent) {
    this.productService.shoppingCart.delete(item);
  }

  lessQuantity(item: ProductComponent){
    this.products[this.products.indexOf(item)].quantity = this.products[this.products.indexOf(item)].quantity.valueOf() - 1;
  }

}
