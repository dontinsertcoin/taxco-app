import { Injectable } from '@angular/core';
import { ProductComponent } from '../../components/shop/product/product.component';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrdersService } from '../orders/orders.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  private productsCollection : AngularFirestoreCollection<ProductComponent>;
  private products : Observable<ProductComponent []>;
  public shoppingCart: Map <ProductComponent, number>;
  public totalPrice: number;

  constructor(private firestoreDataBase: AngularFirestore) { 
    this.productsCollection = firestoreDataBase.collection<ProductComponent>('Productos');
    this.products = this.productsCollection.valueChanges();
    this.shoppingCart= new Map();
    this.totalPrice = 0;
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
    this.totalPrice = parseFloat(this.totalPrice.toString()) + parseFloat(number.toString());
  }

}
