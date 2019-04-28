import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  private login: boolean = true;  
  private register: boolean = false;
  private logout: boolean;
  private authService: AuthService;

  constructor(authService: AuthService) { 
    this.authService = authService;
    this.login= true;
    this.logout= false;
    this.register= false;
  }

  changeToRegister(){
    this.login= false;
    this.register= true;
  }

  changeToLogin(){
    this.login= true;
    this.register= false;
  }

  ngOnInit() {
  }  

}
