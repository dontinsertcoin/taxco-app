import { Component, OnInit } from '@angular/core';

import { Image } from '../shared/image/image.component';
import { ImageService } from '../../services/images/image.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  private images: Image[];
  private imageSelected: Image;
  private imageSelectedIndex: number;
  private filterSelected= "Todas";

  constructor(private imageService: ImageService) {
 }

  ngOnInit() {
    this.imageService.filteredEvent.subscribe((data : Image[]) => {
      this.images = data;
    });
    this.imageService.getAllImages();
  }

  displayImage(image: Image, index: number){
    this.imageService.imageSelected= image;
    this.imageService.imageSelectedIndex= index;
    this.imageService.displayImage();
  }

  filter (id: string) {
    this.filterSelected = id;
    this.imageService.getFilteredImages(id);
  }

  ngOnDestroy(){
    this.imageService.filteredEvent.unsubscribe();
  }
  
}
