import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  showMobileMenu: boolean= false;
  showModalUser: boolean= false;

  constructor() { 
  }

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

  hideMenu(){
    this.showMobileMenu= false;
  }

  addShowClass(){
  }

  showUserModal(){
    if (!this.showModalUser){
      this.showModalUser=true;
      console.log("Activo");
    }else{
      this.showModalUser=false;
      console.log("Inactivo");
    }
  }

}
