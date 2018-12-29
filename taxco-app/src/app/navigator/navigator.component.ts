import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  showMobileMenu: boolean= false;

  constructor() { 
  }

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

}
