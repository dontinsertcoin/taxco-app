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
    console.log('myOrders');
    console.log(this.myOrders);
    this.ordersFormated = this.formateMyOrders();
    console.log('ordersFormated');
    console.log(this.ordersFormated);
  }

  ngOnInit() {
  }

  getMyOrders(){
    return this.ordersService.getOrdersByEmail(this.authService.email);
  }

  formateMyOrders(){
    let allOrders;
    for (let i=0; i < this.myOrders.length ; i++) {
      let orderAux = [this.myOrders[i].date, this.myOrders[i].price];
      let orderedItems = JSON.parse(this.myOrders[i].shoppingCart);      
      orderAux.push(orderedItems);
      allOrders.push(orderAux);
      console.log(orderedItems);
      console.log(orderAux);
      console.log(allOrders);
    }
    return allOrders;
  }
}
