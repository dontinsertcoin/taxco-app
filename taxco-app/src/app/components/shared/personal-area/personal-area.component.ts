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
  ordersFormated= [1,2,3];

  constructor(private ordersService: OrdersService, private authService: AuthService) {}
    

  ngOnInit() {
    this.myOrders = this.getMyOrders();
    console.log('myOrders');
    console.log(this.myOrders);
    console.log(this.ordersFormated);
    this.ordersFormated = this.formateMyOrders();  
  }

  getMyOrders(){
    return this.ordersService.getOrdersByEmail(this.authService.email);
  }

  formateMyOrders(){
    //TODO EventEmmiter para evitar que venga vacío
    let allOrders;
    this.myOrders.forEach( (order) => {
      let orderAux = [order.date, order.price];
      let orderedItems = JSON.parse(order.shoppingCart);
      orderAux.push(orderedItems);
      allOrders.push(orderAux);
    })
    console.log(allOrders);
    return allOrders;
  }
}
