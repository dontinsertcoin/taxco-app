import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  images = ['https://firebasestorage.googleapis.com/v0/b/taxco-app.appspot.com/o/carrusel-image-1.png?alt=media&token=e181b2a5-501f-44c0-a6a7-81cc0e77fbd3',
  'https://firebasestorage.googleapis.com/v0/b/taxco-app.appspot.com/o/carrusel-image-2.png?alt=media&token=5d540de6-8177-40ca-9944-a07698a2c9a3',
  'https://firebasestorage.googleapis.com/v0/b/taxco-app.appspot.com/o/carrusel-image-3.png?alt=media&token=e923e92d-74d1-45b8-bd2a-6e5be2cf964f']

  constructor() { }

  ngOnInit() {
  }

}
