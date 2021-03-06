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

  onSubmitLogUser(){
    this.authService.loginEmail(this.email, this.password)
    .then( (res) => {
      this.authService.loggedSession = true;
      this.modalService.close('custom-modal-1');
      this.modalService.textSuccess= "Acabas de iniciar sesión. ¡Bienvenido!";
      this.modalService.open('success-modal');
      setTimeout(() => this.modalService.close('success-modal'), 2500);
    }).catch((err) => {
      this.modalService.textError= "¡Ups! Parece que los datos no son correctos.";
      this.modalService.open('error-modal');
      setTimeout(() => this.modalService.close('error-modal'), 2500);
    })
  }

  changeToRegister(){
    this.authService.changeRegister();
  }

  closeModal() {
    this.modalService.close('custom-modal-1');
  }
}
