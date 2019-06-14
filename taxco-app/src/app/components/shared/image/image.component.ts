import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class Image implements OnInit {

  public imagePath: string;
  public title: string;
  public type: string;

  constructor(){
  }
  
  setImageData (imageUrl: string, name: string, tipo: string) {
    this.imagePath= imageUrl;
    this.title= name;
    this.type= tipo;
  }

  ngOnInit() {
  }

}
