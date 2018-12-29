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
    console.log("click");
    if (!this.showMobileMenu){
      this.showMobileMenu=true;
      console.log(true);
    }else{
      this.showMobileMenu=false;
      console.log(false);
    }
  }

  hideMenu(){
    this.showMobileMenu= false;
  }

  addShowClass(){

  }

}
