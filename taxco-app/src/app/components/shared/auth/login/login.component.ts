import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private authService: AuthService;
  private email: string;
  private password: string;

  constructor(authService: AuthService) { 
    this.authService = authService;
  }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this.authService.userRegistry(this.email, this.password)
    .then( (res) => {      
    }).catch( (err) => {
    });
  }

  onSubmitLogUser(){
    this.authService.loginEmail(this.email, this.password)
    .then( (res) => {
      console.log("Loged in: " + this.email);
    }).catch((err) => {
    })
  }

  changeToRegister(){
    this.authService.changeRegister();
  }

}
