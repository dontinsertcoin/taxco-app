import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {


  showMobileMenu : boolean= false;
  email : string;
  password : string;
  sessionsLoged: boolean;
  showLogOut: boolean;
  showModalRegister : boolean= false;
  showModalSuccess : boolean= false;
  showLoginError : boolean= false;
  showModalLogin : boolean = false;
  showModal : boolean = false;

  constructor(public authService: AuthService, public modalService: ModalService) { }

  ngOnInit() {
  }

  changeValue(value: boolean){
    if (!value){
      value=true;
    }else{
      value=false;
    }
  }

  showMenu(){
    if (!this.showMobileMenu){
      this.showMobileMenu=true;
    }else{
      this.showMobileMenu=false;
    }
  }

  showRegisterModal(){

    if (this.sessionsLoged){
      this.showModal= true;
      this.showLogOut = true;
    } else {
      if (!this.showModalRegister){
        if (this.showMobileMenu){
          this.showMobileMenu = false;
        }
        this.showModal= true;
        this.showModalRegister=true;
        this.showModalLogin = false;
      }else{
        if (!this.showModalSuccess){
          this.showModal= false;
        }      
        this.showModalRegister=false;
        this.showLoginError=false;
      }
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
      this.showModal= false;
      this.showModalSuccess=false;
    }
  }

  showLoginModal(){
    if (!this.showModalLogin){
      this.showModal= true;
      this.showModalRegister=false;
      this.showModalLogin = true;
    }else{
      if (!this.showModalSuccess){
        this.showModal= false;
      } 
      this.showModalLogin=false;
      this.showLoginError=false;
    }
  }

  onSubmitAddUser(){
    this.authService.userRegistry(this.email, this.password)
    .then( (res) => {      
      this.showSuccessModal();
      this.showRegisterModal();
    }).catch( (err) => {
      this.showLoginError=true;
    });
  }

  onSubmitLogUser(){
    this.authService.loginEmail(this.email, this.password)
    .then( (res) => {
      this.showSuccessModal();
      this.showLoginModal();
      console.log("Loged in: " + this.email);
      this.sessionsLoged= true;
    }).catch((err) => {
      this.showLoginError=true;
    })
  }

  logOut(){
    this.authService.logout()
    .then((res) => {
      this.sessionsLoged = false;
      this.showLogOut = false;
      this.showModal = false;
    })
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }

}
