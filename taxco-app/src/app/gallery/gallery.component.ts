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
  private maxPerPage: number;
  private numPage: number;
  private actualPage: number;
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
      new Image('/assets/resources/images/logo.jpg', 'Prueba8', 'Pabellon'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba9', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba10', 'Entero'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba11', 'Pecho'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba12', 'Pabellon'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba13', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba14', 'Entero'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba15', 'Pecho'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba16', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba17', 'Entero'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba18', 'Pecho'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba19', 'Pabellon'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba20', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba21', 'Entero'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba22', 'Pecho'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba1', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba2', 'Entero'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba3', 'Pecho'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba4', 'Pabellon'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba5', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba6', 'Entero'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba7', 'Pecho'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba8', 'Pabellon'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba9', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba10', 'Entero'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba11', 'Pecho'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba12', 'Pabellon'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba13', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba14', 'Entero'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba15', 'Pecho'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba16', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba17', 'Entero'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba18', 'Pecho'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba19', 'Pabellon'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba20', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba21', 'Entero'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba1', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba2', 'Entero'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba3', 'Pecho'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba4', 'Pabellon'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba5', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba6', 'Entero'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba7', 'Pecho'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba8', 'Pabellon'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba9', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba10', 'Entero'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba11', 'Pecho'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba12', 'Pabellon'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba13', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba14', 'Entero'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba15', 'Pecho'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba16', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba17', 'Entero'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba18', 'Pecho'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba19', 'Pabellon'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba20', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba21', 'Entero')
    ];
    this.maxPerPage= (this.images.length/3) > 5 ? 5 : this.images.length/3;
    this.numPage= this.images.length/15;
    this.actualPage= 1;
  }

  ngOnInit() {
  }

  filtrar(filtro: string){
    this.constructor();
    this.images= this.images.filter( image => image.tipe === filtro);
    this.maxPerPage= (this.images.length/3) > 4 ? 4 : this.images.length/3;
  }

  showImage(num: number){
    if (this.images[num]){
      return true;
    }else{
      return false;
    }    
  }

}
