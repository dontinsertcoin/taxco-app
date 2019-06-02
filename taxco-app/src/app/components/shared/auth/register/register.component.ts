import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService, private modalService: ModalService) {
   }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this.authService.userRegistry(this.email, this.password)
    .then( (res) => {   
      this.modalService.textSuccess= "Usuario registrado con éxito, ya puedes inciar sesión";
      this.modalService.open('success-modal');  
    }).catch( (err) => {
      this.modalService.textError= "¡Ups! Parece que tenemos problemas técnicos.";
      this.modalService.open('error-modal');
    });
  }

  closeModal() {
    this.modalService.close('custom-modal-1');
  }

  changeToLogin(){
    this.authService.changeRegister();
  }

}
