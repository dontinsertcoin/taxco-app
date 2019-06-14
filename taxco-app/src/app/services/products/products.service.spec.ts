import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

describe('ProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ 
      AngularFirestoreModule,
      AngularFireModule.initializeApp(
        environment.firebaseConfig
      ) 
    ]
  }));

  it('should be created', () => {
    const service: ProductsService = TestBed.get(ProductsService);
    expect(service).toBeTruthy();
  });
});
