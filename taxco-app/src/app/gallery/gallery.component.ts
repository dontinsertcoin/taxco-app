import { Component, OnInit } from '@angular/core';

import { Image } from '../gallery/image/image.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  images: Image[]=[
    new Image('/assets/resourse/images/presentation.jpg', 'Prueba', 'Prueba')
  ];

  constructor() { }

  ngOnInit() {
  }

}
