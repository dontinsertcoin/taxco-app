import { Injectable } from '@angular/core';
import { Image } from '../../components/shared/image/image.component';
import { ProductComponent } from '../../components/shop/product/product.component';
import { OrderComponent } from '../../components/order/order.component';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderProductComponent } from 'src/app/components/order/order-product/order-product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  private productsCollection : AngularFirestoreCollection<ProductComponent>;
  private ordersCollection : AngularFirestoreCollection<OrderComponent>;
  private products : Observable<ProductComponent []>;
  public shoppingCart: Map <ProductComponent, number>;
  public totalPrice: number = 0;
  private dateNow: Date;

  constructor(private firestoreDataBase: AngularFirestore) { 
    this.productsCollection = firestoreDataBase.collection<ProductComponent>('Productos');
    this.ordersCollection = firestoreDataBase.collection<OrderComponent>('Pedidos');
    this.products = this.productsCollection.valueChanges();
    this.shoppingCart= new Map();
  }

  getProducts(){
    return this.products = this.productsCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action => {
        const data = action.payload.doc.data() as ProductComponent;
        data.id= action.payload.doc.id;
        return data;
      });
    }));
  }

  addToTotalPrice(number: number){
    this.totalPrice += number.valueOf();
  }

  confirmOrder(){
    const dateNow = Date.now();
    let formatedOrder = this.transformShoppingCart();
    let prueba= JSON.stringify(formatedOrder);
    let order = JSON.parse(JSON.stringify(new OrderComponent (prueba, "email", "calle", dateNow, this.totalPrice)));
    this.ordersCollection.add(order);
  }

  transformShoppingCart(){
    let result= [];
    this.shoppingCart.forEach((value: number, key: ProductComponent) => {
      let productAux= new OrderProductComponent(key.id, key.name, key.price, value);
      result.push(productAux);
    });
    return result;
  }
}
