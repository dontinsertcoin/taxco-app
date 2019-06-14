import { Injectable, EventEmitter, Output } from '@angular/core';
import {formatDate} from '@angular/common';
import { ProductComponent } from '../../components/shop/product/product.component';
import { OrderComponent } from '../../components/order/order.component';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderProductComponent } from 'src/app/components/order/order-product/order-product.component';
import { ProductsService } from '../products/products.service';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  
  private ordersCollection : AngularFirestoreCollection<OrderComponent>;
  private orders : Observable<OrderComponent []>;
  private ordersDoc: AngularFirestoreDocument<OrderComponent>;
  private date: string;

  @Output()
  ordersByEmailEvent = new EventEmitter<OrderComponent[]>();

  @Output()
  allOrdersEvent = new EventEmitter<OrderComponent[]>();

  constructor(private firestoreDataBase: AngularFirestore, private productsService: ProductsService, private authService: AuthService) {
    this.ordersCollection = firestoreDataBase.collection<OrderComponent>('Pedidos');
    this.orders = this.ordersCollection.valueChanges();
  }

  getOrders(){
    return this.orders = this.ordersCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action => {
        const data = action.payload.doc.data() as OrderComponent;
        data.id= action.payload.doc.id;
        return data;
      });
    }));
  }

  confirmOrder(address : string){    
    this.date = formatDate(new Date(), 'dd/MM/yyyy', 'en').toString();
    let formatedOrder = this.transformShoppingCart();
    let prueba= JSON.stringify(formatedOrder);
    let order = JSON.parse(JSON.stringify(new OrderComponent()
      .setOrderComponentData(prueba, this.authService.email, address, this.date, this.productsService.totalPrice, 0)));
    this.ordersCollection.add(order);
  }

  transformShoppingCart(){
    let result= [];
    this.productsService.shoppingCart.forEach((value: number, key: ProductComponent) => {
      let productAux= new OrderProductComponent()
        .setOrderProductComponentData(key.id, key.name, key.price, value);
      result.push(productAux);
    });
    return result;
  }

  getOrdersByEmail(email:string){
    let userOrders =[];
    this.getOrders().subscribe((data) => {
      data.forEach((myOrder: OrderComponent) => {
        if (myOrder.email == email){
          userOrders.push(myOrder);
        }
      });
      this.ordersByEmailEvent.emit(userOrders); 
    });
  }

  getAllOrders(){
    let allOrders =[];
    this.getOrders().subscribe((data) => {
      allOrders= data;
      this.allOrdersEvent.emit(allOrders);
    })
  }

  updateOrderNextState(order : OrderComponent){
    this.ordersDoc=this.firestoreDataBase.doc(`Pedidos/${order.id}`);
    this.ordersDoc.update(order);
  }

  deleteOrder(order: OrderComponent){
    this.ordersDoc=this.firestoreDataBase.doc(`Pedidos/${order.id}`);
    this.ordersDoc.delete();
  }
}
