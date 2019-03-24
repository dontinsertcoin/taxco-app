import { Component, OnInit } from '@angular/core';
import { Image } from '../../shared/image/image.component';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {

  name: String;
  price: Number;
  quantity: Number;
  photo: Image;

  constructor() { }

  ngOnInit() {
  }

}
