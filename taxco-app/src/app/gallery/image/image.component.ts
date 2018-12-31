import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class Image implements OnInit {

  private imagePath: string;
  private title: string;
  private tipo: string;

  constructor(imageUrl: string, name: string, tipo: string) {
    this.imagePath= imageUrl;
    this.title= name;
    this.tipo= tipo;
   }

  ngOnInit() {
  }

}
