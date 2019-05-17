import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  videoUrl: string = 'https://www.youtube.com/watch?v=DBLFwHosi2c';
  safeUrl;

  constructor(){
    
 }

  ngOnInit() {
  }



}
