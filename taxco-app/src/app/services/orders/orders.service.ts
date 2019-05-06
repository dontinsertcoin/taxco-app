import { Injectable } from '@angular/core';
import { ProductComponent } from '../../components/shop/product/product.component';
import { OrderComponent } from '../../components/order/order.component';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
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

  confirmOrder(){
    const dateNow = Date.now();
    let formatedOrder = this.transformShoppingCart();
    let prueba= JSON.stringify(formatedOrder);
    let order = JSON.parse(JSON.stringify(new OrderComponent (prueba, this.authService.email, "calle", dateNow, this.productsService.totalPrice)));
    this.ordersCollection.add(order);
  }

  transformShoppingCart(){
    let result= [];
    this.productsService.shoppingCart.forEach((value: number, key: ProductComponent) => {
      let productAux= new OrderProductComponent(key.id, key.name, key.price, value);
      result.push(productAux);
    });
    return result;
  }

  getOrdersByEmail(email:string){
    let aux =[];
    this.getOrders().forEach((allOrders: OrderComponent[]) => {
      allOrders.forEach((myOrder: OrderComponent) => {
        if (myOrder.email == email){
          aux.push(myOrder);
        }
      })
    });
    return aux;
  }
}
