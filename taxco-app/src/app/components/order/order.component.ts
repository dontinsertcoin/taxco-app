import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../shop/product/product.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  shoppingCart: string;
  email: string;
  address: string;
  date: number;
  price: number;
  id: string;
  status: number;

  constructor(shoppingCart: string, email: string, address: string, date: number, price: number, status: number) { 
    this.shoppingCart= shoppingCart;
    this.email=email;
    this.address= address;
    this.date= date;
    this.price= price;
    this.status= status;
  }

  ngOnInit() {
  }

}
