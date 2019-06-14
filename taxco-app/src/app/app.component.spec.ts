import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './components/shared/navigator/navigator.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { RouterTestingModule } from '@angular/router/testing';
import { AuthComponent } from './components/shared/auth/auth.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/shared/auth/register/register.component';
import { LoginComponent } from './components/shared/auth/login/login.component';
import { LogoutComponent } from './components/shared/auth/logout/logout.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { ImageService } from './services/images/image.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavigatorComponent,
        FooterComponent,
        AuthComponent,
        ModalComponent,
        RegisterComponent,
        LoginComponent,
        LogoutComponent
      ],
      imports: [RouterTestingModule, FormsModule, AngularFireAuthModule,
        AngularFireModule.initializeApp(
          environment.firebaseConfig
        ), AngularFirestoreModule],
        providers: [ImageService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
