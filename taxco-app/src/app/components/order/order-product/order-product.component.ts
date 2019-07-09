import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.scss']
})
export class OrderProductComponent implements OnInit {

  private name: string;
  private price: number;
  private id: string;
  private quantity: number;

  constructor(id: string, name: string, price: number, quantity: number) { 
    this.id= id;
    this.name= name;
    this.price= price;
    this.quantity= quantity;
  }
  
  setOrderProductComponentData (id: string, name: string, price: number, quantity: number) { 
    this.id= id;
    this.name= name;
    this.price= price;
    this.quantity= quantity;
  }

  ngOnInit() {
  }

}
