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
      this.closeModal();
    })
  }

  closeModal() {
    this.modalService.close('custom-modal-1');
  }
}
