import { Injectable, Output, EventEmitter } from '@angular/core';
import { Image } from '../../components/shared/image/image.component';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable()
export class ImageService{
    
  imageSelectedIndex: number = 0;
  imageSelected: Image = new Image();
  imagesFiltered: Image[];
  images: Observable<Image []>;
  imagesCollection: AngularFirestoreCollection<Image>;

  @Output()
  displayImageEvent = new EventEmitter<string>();

  @Output()
  filteredEvent = new EventEmitter<Image[]>(); 

  constructor(private firestoreDataBase: AngularFirestore) {
    this.imagesCollection = firestoreDataBase.collection<Image>('Imagenes');
    this.images = this.imagesCollection.valueChanges();
    this.imageSelected.setImageData('/assets/resources/images/logo.jpg', 'Prueba2', 'Entero');
  }
  getImages(){
    return this.images = this.imagesCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action => {
        const data = action.payload.doc.data() as Image;
        return data;
      });
    }));
  }

  getAllImages(){
    this.getImages().subscribe((allImages) => {
      this.imagesFiltered = allImages;
      this.filteredEvent.emit(this.imagesFiltered);
    })
  }

  getFilteredImages(filterId: string){
    if (filterId != 'Todas'){
      this.getImages().subscribe((filteredImages) => {
        this.imagesFiltered = filteredImages.filter(image => image.type === filterId);
        this.filteredEvent.emit(this.imagesFiltered);
      });
    } else {
      this.getAllImages();
    }
    this.getImages();
  }

  displayImage(){
    this.displayImageEvent.emit("showImage");
  }

}

