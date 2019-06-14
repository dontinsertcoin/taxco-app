import { TestBed } from '@angular/core/testing';

import { OrdersService } from './orders.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';

describe('OrdersService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ 
      AngularFirestoreModule,
      AngularFireAuthModule,
      AngularFireModule.initializeApp(
        environment.firebaseConfig
      )
    ]
  }));

  it('should be created', () => {
    const service: OrdersService = TestBed.get(OrdersService);
    expect(service).toBeTruthy();
  });
});
