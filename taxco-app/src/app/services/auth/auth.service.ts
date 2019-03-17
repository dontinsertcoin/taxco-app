import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //authState: AngularFireAuth = null;

  constructor(private afAuth: AngularFireAuth) {
  }

  userRegistry(email: string, password: string){
    return new Promise((resolve, reject) =>{
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then( userData => resolve(userData),
      err => reject(err));
    });
  }

  loginEmail(email: string, pass: string){
    return new Promise((resolve, reject) =>{
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then( userData => resolve(userData),
      err => reject(err));
    });
  }

  /*getAuth(){
    return this.afAuth.authState.map( auth => auth );
  }*/

  logout(){
    return this.afAuth.auth.signOut();
  }
}
