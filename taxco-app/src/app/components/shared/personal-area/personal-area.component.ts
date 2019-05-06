import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { OrderComponent } from '../../order/order.component';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.scss']
})
export class PersonalAreaComponent implements OnInit {

  myOrders: OrderComponent[];
  ordersFormated: [];

  constructor(private ordersService: OrdersService, private authService: AuthService) { 
    this.myOrders = this.getMyOrders();
    this.ordersFormated = this.formateMyOrders();
    console.log(this.ordersFormated);
  }

  ngOnInit() {
  }

  getMyOrders(){
    return this.ordersService.getOrdersByEmail(this.authService.email) != null ? 
    this.ordersService.getOrdersByEmail(this.authService.email) : [];
  }

  formateMyOrders(){
    let allOrders;
    this.myOrders.forEach((order: OrderComponent) => {
      let orderAux = [order.date, order.price];
      let orderedItems = JSON.parse(order.shoppingCart);
      orderAux.push(orderedItems);
      allOrders.push(orderAux);
    });
    return allOrders;
  }



}
