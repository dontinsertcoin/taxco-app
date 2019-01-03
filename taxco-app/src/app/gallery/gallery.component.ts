import { Component, OnInit } from '@angular/core';

import { Image } from '../gallery/image/image.component';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  private images: Image[];
  temp = Array;
  math = Math;

  constructor() {
    this.images=[
      new Image('/assets/resources/images/presentation.jpg', 'Prueba1', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba2', 'Entero'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba3', 'Pecho'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba4', 'Pabellon'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba5', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba6', 'Entero'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba7', 'Pecho'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba8', 'Pabellon')];
  }

  ngOnInit() {
  }

  filtrar(filtro: string){
    this.constructor();
    this.images= this.images.filter( image => image.tipe === filtro);
  }

  showImage(num: number){
    if (this.images[num]){
      return true;
    }else{
      return false;
    }    
  }

}
