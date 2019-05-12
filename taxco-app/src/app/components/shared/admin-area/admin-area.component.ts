import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { OrderComponent } from '../../order/order.component';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-admin-area',
  templateUrl: './admin-area.component.html',
  styleUrls: ['./admin-area.component.scss']
})
export class AdminAreaComponent implements OnInit, OnDestroy {

  allOrders: OrderComponent[];
  ordersFormated: any[];

  constructor(private ordersService: OrdersService) { }

  ngOnInit() { 
    this.ordersService.allOrdersEvent.subscribe((data: OrderComponent[]) => {
      this.allOrders = data;
      this.ordersFormated = this.formateOrders();  
    });
    this.ordersService.getAllOrders();
  }

  formateOrders(){
    let orders = [];
    this.allOrders.forEach( (order) => {
      let orderAux = [order.date, order.price, order.status, order.id];
      let orderedItems = JSON.parse(order.shoppingCart);
      orderAux.push(orderedItems);
      orders.push(orderAux);
      
    })
    return orders;
  }

  ngOnDestroy(){
    this.ordersService.allOrdersEvent.unsubscribe();
  }

  orderNextState(id: string){
    let notFound= true;
    let i = 0;
    while (notFound && i < this.allOrders.length){
      if (this.allOrders[i].id == id){
        this.allOrders[i].status= this.allOrders[i].status.valueOf() + 1;
        this.ordersService.updateOrderNextState(this.allOrders[i]);
        notFound= false;
      }
      i++;
    }
    this.ordersFormated = this.formateOrders();
  }
}
