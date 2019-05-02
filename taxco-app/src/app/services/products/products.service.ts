import { Injectable } from '@angular/core';
import { Image } from '../../components/shared/image/image.component';
import { ProductComponent } from '../../components/shop/product/product.component';
import { OrderComponent } from '../../components/order/order.component';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    let prueba1= this.shoppingCart;
    console.log(prueba1);
    let prueba= JSON.stringify(this.shoppingCart);
    console.log(prueba);
    let order1 = JSON.stringify(new OrderComponent (this.shoppingCart, "email", "calle", dateNow));
    let order = JSON.parse(JSON.stringify(new OrderComponent (this.shoppingCart, "email", "calle", dateNow)));
    //this.ordersCollection.add(order);
    console.log(order1);
  }
}
