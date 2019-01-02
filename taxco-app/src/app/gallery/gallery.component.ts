import { Component, OnInit } from '@angular/core';

import { Image } from '../gallery/image/image.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  private images: Image[]=[
    new Image('/assets/resources/images/presentation.jpg', 'Prueba', 'Prueba'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba', 'Prueba'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba', 'Prueba'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba', 'Prueba'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba', 'Prueba'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba', 'Prueba'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba', 'Prueba'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba', 'Prueba')
  ];
  temp = Array;
  math = Math;

  constructor() { 
  }

  ngOnInit() {
  }

}
