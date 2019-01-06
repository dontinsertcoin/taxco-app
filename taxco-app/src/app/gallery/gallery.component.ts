import { Component, OnInit } from '@angular/core';

import { Image } from '../gallery/image/image.component';
import { ImageService } from './image/shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  private images: Image[];
  private maxPerPage: number;
  private actualPage: number;
  private lastPage: number;
  temp = Array;
  math = Math;
  private rawsPerPage = 0;
  private imagesPerRaw = 0;
  private imagesPerPage = 0;
  private imageService: ImageService;

  constructor(private imageServiceAux: ImageService) {
    this.imageService = this.imageServiceAux;
    if (this.rawsPerPage === 0){
      this.rawsPerPage = this.imageService.RAWSPERPAGE;
      this.imagesPerPage = this.imageService.IMAGESPERPAGE;
      this.imagesPerRaw = this.imageService.IMAGESPERRAW;
    }
    this.actualPage = 1;   
    this.images= this.imageService.getImages();
    this.maxPerPage= (this.images.length/(this.imagesPerRaw*this.actualPage)) > this.rawsPerPage ? 
      this.rawsPerPage : (this.images.length/(this.imagesPerRaw*this.actualPage));
    this.lastPage= this.images.length % this.imagesPerPage === 0 ? 
      this.images.length/this.imagesPerPage : Math.floor(this.images.length/this.imagesPerPage) + 1;
  }

  ngOnInit() {
  }

  filtrar(filtro: string){
    this.constructor(this.imageService);
    if (filtro != 'Todas'){
      this.images= this.images.filter( image => image.tipe === filtro);
    }    
    this.maxPerPage= (this.images.length/this.imagesPerRaw) > this.rawsPerPage ? 
      this.rawsPerPage : this.images.length/this.imagesPerRaw;
    this.lastPage= this.images.length % this.imagesPerPage === 0 ? 
      this.images.length/this.imagesPerPage : Math.floor(this.images.length/this.imagesPerPage) + 1;
  }

  showImage(num: number){
    if (this.images[num]){
      return true;
    }else{
      return false;
    }    
  }

  nextPage(){
    this.actualPage= this.actualPage + 1;
    this.maxPerPage= ((this.images.length -(this.imagesPerPage *(this.actualPage - 1)))/this.imagesPerRaw) > this.rawsPerPage ? 
      this.rawsPerPage : ((this.images.length -(this.imagesPerPage *(this.actualPage - 1)))/this.imagesPerRaw);
  }

  previousPage(){
    this.actualPage= this.actualPage - 1;
    this.maxPerPage= ((this.images.length -(this.imagesPerPage *(this.actualPage - 1)))/this.imagesPerRaw) > this.rawsPerPage ? 
      this.rawsPerPage : ((this.images.length -(this.imagesPerPage *(this.actualPage - 1)))/this.imagesPerRaw);
  }

  goToPage(num: number){
    if (num > this.actualPage){
      for (this.actualPage; this.actualPage === num; this.actualPage++){
        this.nextPage();
      }
    }else{
      if (num < this.actualPage){
        for (this.actualPage; this.actualPage === num; this.actualPage++){
          this.previousPage();
        }
      }
    }
  }

  displayImage(num: number){
    console.log("Desplegando imagen " + num);
  }
  
}
