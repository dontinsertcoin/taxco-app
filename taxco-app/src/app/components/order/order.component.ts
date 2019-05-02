import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../shop/product/product.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  private shoppingCart: Map <ProductComponent, number>;
  private email: string;
  private address: string;
  private date: number;

  constructor(shoppingCart: Map <ProductComponent, number>, email: string, address: string, date: number) { 
    this.shoppingCart= shoppingCart;
    this.email=email;
    this.address= address;
    this.date= date;
  }

  ngOnInit() {
  }

}
