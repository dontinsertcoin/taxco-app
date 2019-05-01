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
    this.authService= authService;
    this.register=this.authService.register;
  }

  changeToRegister(){
  }

  changeToLogin(){
  }

  ngOnInit() {
  }  

}
