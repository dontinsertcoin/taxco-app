import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedSession: boolean = false;
  public register: boolean = false;

  constructor(private afAuth: AngularFireAuth) {
  }

  userRegistry(email: string, pass: string){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then( userData => {
        resolve(userData);},
      err => reject(err));
    });
  }

  loginEmail(email: string, pass: string){
    return new Promise((resolve, reject) =>{
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then( userData => {resolve(userData);
      this.loggedSession= true;},
      err => reject(err));
    });
  }

  isLoggedIn() {
    return this.afAuth.authState.pipe(first()).toPromise();
 }

  logout(){
    return this.afAuth.auth.signOut();
  }

  changeRegister(){
    if (this.register){
      this.register = false;
    } else {
      this.register = true;
    }
  }
}
