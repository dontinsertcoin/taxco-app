import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private modalService: ModalService) {
  }

  ngOnInit() {
  }

  logOut(){
    this.authService.logout()
    .then((res) => {
      this.authService.loggedSession = false;
      this.modalService.close('custom-modal-1');
      this.modalService.textSuccess= "Sesión cerrada correctamente. ¡Hasta pronto!";
      this.modalService.open('success-modal');
      setTimeout(() => this.modalService.close('success-modal'), 2500);
    })
  }

  closeModal() {
    this.modalService.close('custom-modal-1');
  }
}
