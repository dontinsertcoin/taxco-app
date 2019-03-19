
import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  showMobileMenu : boolean= false;
  showModalUser : boolean= false;
  showModalSuccess : boolean= false;
  showLoginError : boolean= false;
  public email : string;
  public password : string;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  showMenu(){
    if (!this.showMobileMenu){
      this.showMobileMenu=true;
    }else{
      this.showMobileMenu=false;
    }
  }

  hideMenu(){
    this.showMobileMenu= false;
  }

  addShowClass(){
  }

  showUserModal(){
    if (!this.showModalUser){
      this.showModalUser=true;
    }else{
      this.showModalUser=false;
      this.showLoginError=false;
    }
  }

  @HostListener("window:scroll", ['$event'])
  userHasScrolled($event:Event){
    let scrollOffset = $event.srcElement.children[0].scrollTop;
    let navbar = document.getElementById('navbar');
    let logo = document.getElementById('logo');
    let logoImg = document.getElementById('logo-img');
    let navigationBar = document.getElementById('navigation-bar');
    let navigationList = document.getElementById('navigation-list');
    //if (!mobileDevice*){
      if (scrollOffset > 30){     
        navigationBar.className="navigation-bar"; 
        navigationList.className="navigation-list"; 
        navbar.classList.add('scrolled');
        logo.classList.add('scrolled-logo');
        logoImg.classList.add('scrolled-logo');
      } else {
        navigationBar.className=""; 
        navigationList.className="";
        navbar.classList.remove('scrolled');
        logo.classList.remove('scrolled-logo');
        logoImg.classList.remove('scrolled-logo');
      }
    //}
  }

  showSuccessModal(){
    if (!this.showModalSuccess){
      this.showModalSuccess=true;
    }else{
      this.showModalSuccess=false;
    }
  }

  onSubmitAddUser(){
    this.authService.userRegistry(this.email, this.password)
    .then( (res) => {
      this.showUserModal();
      this.showSuccessModal();
    }).catch( (err) => {
      this.showLoginError=true;
    });
  }

}
