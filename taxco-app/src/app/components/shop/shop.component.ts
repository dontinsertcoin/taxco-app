import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  public products = [];
  public product = '';

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe( products => {
      console.log('PRODUCTS', products);
      this.products = products;
      for (let item of this.products) {
        console.log(item.Name);
      }
    })
  }

}
