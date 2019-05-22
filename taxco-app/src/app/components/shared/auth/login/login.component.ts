import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private email: string;
  private password: string;

  constructor(private authService: AuthService, private modalService: ModalService) { 
  }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this.authService.userRegistry(this.email, this.password)
    .then( (res) => {   
      this.modalService.close('custom-modal-1');   
    }).catch( (err) => {
    });
  }

  onSubmitLogUser(){
    this.authService.loginEmail(this.email, this.password)
    .then( (res) => {
      this.authService.loggedSession = true;
      this.modalService.close('custom-modal-1');
    }).catch((err) => {
    })
  }

  changeToRegister(){
    this.authService.changeRegister();
  }

}
