import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  changeToRegister(){
  }

  changeToLogin(){
  }

  ngOnInit() {
  }  

}
