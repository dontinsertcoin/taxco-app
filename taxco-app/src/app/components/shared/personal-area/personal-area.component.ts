import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { OrderComponent } from '../../order/order.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.scss']
})
export class PersonalAreaComponent implements OnInit, OnDestroy {

  myOrders: OrderComponent[];
  ordersFormated: any[];

  private STATES: String[] = ["En preparación", "Enviado", "En reparto", "Finalizado"];
  private COLORS: String[] = ["preparacion", "enviado", "reparto", "finalizado"];
  
  constructor(private ordersService: OrdersService, private authService: AuthService, private modalService: ModalService) { }

  ngOnInit() { 
    this.ordersService.ordersByEmailEvent.subscribe((data: OrderComponent[]) => {
      this.myOrders = data;
      this.ordersFormated = this.formateMyOrders();  
    });
    this.ordersService.getOrdersByEmail(this.authService.email);
  }

  formateMyOrders(){
    let allOrders = [];
    this.myOrders.forEach( (order) => {
      let orderAux = [order.date, order.price, order.status, order.id];
      let orderedItems = JSON.parse(order.shoppingCart);
      orderAux.push(orderedItems);
      allOrders.push(orderAux);
    })
    return allOrders;
  }

  ngOnDestroy(){
    this.ordersService.ordersByEmailEvent.unsubscribe();
  }

  deleteOrder(id: string){
    let notFound= true;
    let i = 0;
    while (notFound && i < this.myOrders.length){
      if (this.myOrders[i].id == id){
        this.myOrders[i].status= this.myOrders[i].status.valueOf() + 1;
        this.ordersService.deleteOrder(this.myOrders[i]);
        notFound= false;
        this.modalService.textSuccess= "El pedido ha sido eliminado";
        this.modalService.open('success-modal');  
        setTimeout(() => this.modalService.close('success-modal'), 2500);
      }
      i++;
    }
    this.ngOnInit();
  }
}
