import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../shop/product/product.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  private shoppingCart: string;
  private email: string;
  private address: string;
  private date: number;
  private price: number;

  constructor(shoppingCart: string, email: string, address: string, date: number, price: number) { 
    this.shoppingCart= shoppingCart;
    this.email=email;
    this.address= address;
    this.date= date;
    this.price= price;
  }

  ngOnInit() {
  }

}
