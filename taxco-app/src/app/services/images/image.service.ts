import { Injectable } from '@angular/core';
import { Image } from '../../components/shared/image/image.component';

@Injectable()
export class ImageService{

  RAWSPERPAGE = 5;
  IMAGESPERRAW = 4;
  IMAGESPERPAGE = this.IMAGESPERRAW * this.RAWSPERPAGE;
  private IMAGES =[
    new Image('/assets/resources/images/presentation.jpg', 'Prueba1', 'Hueso'),
    new Image('/assets/resources/images/logo.jpg', 'Prueba2', 'Entero'),
    new Image('/assets/resources/images/background2.jpg', 'Prueba3', 'Pecho'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba4', 'Pabellon'),
    new Image('/assets/resources/images/background.jpg', 'Prueba5', 'Hueso'),
    new Image('/assets/resources/images/logo.jpg', 'Prueba6', 'Hueso'),
    new Image('/assets/resources/images/logo-blanco.png', 'Prueba7', 'Pecho'),
    new Image('/assets/resources/images/logo.jpg', 'Prueba8', 'Pabellon'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba9', 'Hueso'),
    new Image('/assets/resources/images/logo.jpg', 'Prueba10', 'Entero'),
    new Image('/assets/resources/images/background.jpg', 'Prueba11', 'Pecho'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba12', 'Pabellon'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba13', 'Hueso'),
    new Image('/assets/resources/images/logo.jpg', 'Prueba14', 'Entero'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba15', 'Pecho'),
    new Image('/assets/resources/images/logo-blanco.png', 'Prueba16', 'Hueso'),
    new Image('/assets/resources/images/logo.jpg', 'Prueba17', 'Entero'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba18', 'Pecho'),
    new Image('/assets/resources/images/background.jpg', 'Prueba19', 'Pabellon'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba20', 'Hueso'),
    new Image('/assets/resources/images/logo.jpg', 'Prueba21', 'Entero'),
    new Image('/assets/resources/images/background2.jpg', 'Prueba22', 'Pecho'),
    new Image('/assets/resources/images/background.jpg', 'Prueba23', 'Hueso'),
    new Image('/assets/resources/images/logo.jpg', 'Prueba24', 'Entero'),
    new Image('/assets/resources/images/background.jpg', 'Prueba25', 'Pecho'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba26', 'Pabellon'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba27', 'Hueso'),
    new Image('/assets/resources/images/logo.jpg', 'Prueba28', 'Entero'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba29', 'Pecho'),
    new Image('/assets/resources/images/logo.jpg', 'Prueba30', 'Pabellon'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba31', 'Hueso'),
    new Image('/assets/resources/images/logo.jpg', 'Prueba32', 'Hueso'),
    new Image('/assets/resources/images/background2.jpg', 'Prueba33', 'Pecho'),
    new Image('/assets/resources/images/logo-blanco.png', 'Prueba34', 'Pabellon'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba35', 'Hueso'),
    new Image('/assets/resources/images/logo.jpg', 'Prueba36', 'Entero'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba37', 'Pecho'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba38', 'Hueso'),
    new Image('/assets/resources/images/logo.jpg', 'Prueba39', 'Entero'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba40', 'Pecho'),
    new Image('/assets/resources/images/background.jpg', 'Prueba41', 'Pabellon'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba42', 'Hueso'),
    new Image('/assets/resources/images/logo.jpg', 'Prueba43', 'Entero'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba44', 'Hueso'),
    new Image('/assets/resources/images/logo.jpg', 'Prueba45', 'Hueso'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba46', 'Pecho'),
    new Image('/assets/resources/images/background2.jpg', 'Prueba47', 'Pabellon'),
    new Image('/assets/resources/images/logo-blanco.png', 'Prueba48', 'Hueso'),
    new Image('/assets/resources/images/logo.jpg', 'Prueba49', 'Entero'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba50', 'Pecho'),
    new Image('/assets/resources/images/logo.jpg', 'Prueba50', 'Pabellon'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba51', 'Hueso'),
    new Image('/assets/resources/images/logo.jpg', 'Prueba52', 'Entero'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba53', 'Pecho'),
    new Image('/assets/resources/images/background.jpg', 'Prueba54', 'Pabellon'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba55', 'Hueso'),
    new Image('/assets/resources/images/logo.jpg', 'Prueba56', 'Entero'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba57', 'Pecho'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba58', 'Hueso'),
    new Image('/assets/resources/images/logo.jpg', 'Prueba59', 'Entero'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba60', 'Pecho'),
    new Image('/assets/resources/images/background.jpg', 'Prueba61', 'Pabellon'),
    new Image('/assets/resources/images/presentation.jpg', 'Prueba62', 'Hueso'),
    new Image('/assets/resources/images/logo-blanco.png', 'Prueba63', 'Entero')
  ];  
  private maxPerPage: number;
  private actualPage: number;
  private lastPage: number;

  getImages(){
    return this.IMAGES;
  }

  getImage(num: number){
    return this.IMAGES[num];
  }

}

