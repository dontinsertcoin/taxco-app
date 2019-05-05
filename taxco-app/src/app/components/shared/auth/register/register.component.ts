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
      this.changeToLogin();   
    }).catch( (err) => {
    });
  }

  closeModal(modalId: string){
    this.modalService.close(modalId);
  }

  changeToLogin(){
    this.authService.changeRegister();
  }

}
