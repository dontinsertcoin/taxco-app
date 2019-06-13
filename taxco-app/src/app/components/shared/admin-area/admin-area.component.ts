import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { OrderComponent } from '../../order/order.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-admin-area',
  templateUrl: './admin-area.component.html',
  styleUrls: ['./admin-area.component.scss']
})
export class AdminAreaComponent implements OnInit, OnDestroy {

  allOrders: OrderComponent[];
  ordersFormated: any[];
  private STATES: String[] = ["En preparación", "Enviado", "En reparto", "Finalizado"];
  private COLORS: String[] = ["preparacion", "enviado", "reparto", "finalizado"];

  constructor(private ordersService: OrdersService, private modalService : ModalService) { }

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
      let orderAux = [order.date, order.price, order.status, order.id, order.address, order.email];
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
        this.modalService.textSuccess= "Esta avanzado correctamente";
        this.modalService.open('success-modal');  
        setTimeout(() => this.modalService.close('success-modal'), 2500);
      }
      i++;
    }
    this.ordersFormated = this.formateOrders();
  }
}
