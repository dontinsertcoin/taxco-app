import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class Image implements OnInit {

  public imagePath: string;
  public title: string;
  public tipe: string;

  constructor(imageUrl: string, name: string, tipo: string) {
    this.imagePath= imageUrl;
    this.title= name;
    this.tipe= tipo;
   }

  ngOnInit() {
  }

}
