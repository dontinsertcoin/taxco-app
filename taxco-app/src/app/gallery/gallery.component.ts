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
      new Image('/assets/resources/images/presentation.jpg', 'Prueba20', 'Hueso')/*,
      new Image('/assets/resources/images/logo.jpg', 'Prueba21', 'Entero'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba22', 'Pecho'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba23', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba24', 'Entero'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba25', 'Pecho'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba26', 'Pabellon'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba27', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba28', 'Entero'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba29', 'Pecho'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba30', 'Pabellon'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba31', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba32', 'Entero'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba33', 'Pecho'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba34', 'Pabellon'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba35', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba36', 'Entero'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba37', 'Pecho'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba38', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba39', 'Entero'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba40', 'Pecho'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba41', 'Pabellon'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba42', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba43', 'Entero'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba44', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba45', 'Entero'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba46', 'Pecho'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba47', 'Pabellon'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba48', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba49', 'Entero'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba50', 'Pecho'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba50', 'Pabellon'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba51', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba52', 'Entero'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba53', 'Pecho'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba54', 'Pabellon'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba55', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba56', 'Entero'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba57', 'Pecho'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba58', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba59', 'Entero'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba60', 'Pecho'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba61', 'Pabellon'),
      new Image('/assets/resources/images/presentation.jpg', 'Prueba62', 'Hueso'),
      new Image('/assets/resources/images/logo.jpg', 'Prueba63', 'Entero')*/
    ];
    this.maxPerPage= (this.images.length/3) > 5 ? 5 : this.images.length/3;
    this.numPage= this.images.length % 15 === 0 ? this.images.length/15 : this.images.length/15+1;
    this.actualPage= 1;
    
  }

  ngOnInit() {
  }

  filtrar(filtro: string){
    this.constructor();
    this.images= this.images.filter( image => image.tipe === filtro);
    this.maxPerPage= (this.images.length/3) > 5 ? 5 : this.images.length/3;
  }

  showImage(num: number){
    if (this.images[num]){
      return true;
    }else{
      return false;
    }    
  }

  nextPage(){
    this.actualPage= this.actualPage+1;
  }

}
