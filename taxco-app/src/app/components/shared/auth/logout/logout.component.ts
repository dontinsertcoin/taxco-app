import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  logOut(){
    this.authService.logout()
    .then((res) => {
      this.authService.loggedSession = false;
    })
  }

  ngOnInit() {
  }

}
