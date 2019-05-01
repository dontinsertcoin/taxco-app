import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService= authService;
   }

  ngOnInit() {
  }

  changeToRegiter(){
    this.authService.changeRegister();
  }

}
