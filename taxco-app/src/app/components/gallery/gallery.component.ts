import { Component, OnInit } from '@angular/core';

import { Image } from '../shared/image/image.component';
import { ImageService } from '../../services/images/image.service';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  private images: Image[];
  private imageSelected: Image;
  private imageSelectedIndex: number;

  constructor(private imageService: ImageService, private modalService: ModalService) {
    this.images= this.imageService.getImages();
 }

  ngOnInit() {
  }

  filtrar(filtro: string){
    this.constructor(this.imageService);
    if (filtro != 'Todas'){
      this.images= this.images.filter( image => image.type === filtro);
      console.log(this.images);
    }    
  }

  displayImage(image: Image, index: number){
    this.imageSelected= image;
    this.imageSelectedIndex= index;
    this.modalService.open("image-display");
  }

  nextImage(){
    if (this.imageSelectedIndex === (this.images.length -1)){
      this.imageSelectedIndex= 0;
      this.imageSelected= this.images[this.imageSelectedIndex];
    }else{
      this.imageSelectedIndex++;
      this.imageSelected= this.images[this.imageSelectedIndex];
    }    
  }

  previousImage(){
    if (this.imageSelectedIndex === 0){
      this.imageSelectedIndex= this.images.length-1;
      this.imageSelected= this.images[this.imageSelectedIndex];
    }else{
      this.imageSelectedIndex--;
      this.imageSelected= this.images[this.imageSelectedIndex];
    }   
  }

  closeModal(id: string){
    this.modalService.close(id);
  }
  
}
