import { Component, OnInit } from '@angular/core';

import { Image } from '../shared/image/image.component';
import { ImageService } from '../../services/images/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  private images: Image[];
  private imageSelected: Image;
  private imageSelectedIndex: number;

  constructor(private imageService: ImageService) {
    this.images= this.imageService.imagesFiltered;
 }

  ngOnInit() {
  }

  displayImage(image: Image, index: number){
    this.imageService.imageSelected= image;
    this.imageService.imageSelectedIndex= index;
    this.imageService.displayImage();
  }

  filtrar (id: string) {
    this.imageService.filterImages(id);
    this.images = this.imageService.imagesFiltered;
  }
  
}
