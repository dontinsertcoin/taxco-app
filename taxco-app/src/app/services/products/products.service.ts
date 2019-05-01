import { Injectable } from '@angular/core';
import { Image } from '../../components/shared/image/image.component';
import { ProductComponent } from '../../components/shop/product/product.component';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  private productsCollection : AngularFirestoreCollection<ProductComponent>;
  private products : Observable<ProductComponent []>;
  public shoppingCart: Map <ProductComponent, Number>;

  constructor(private firestoreDataBase: AngularFirestore) { 
    this.productsCollection = firestoreDataBase.collection<ProductComponent>('Productos');
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

  addProduct(){

  }

  updateProduct(){

  }

  deleteProduct(){

  }
}
