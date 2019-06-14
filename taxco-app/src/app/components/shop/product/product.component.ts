import { Component, OnInit } from '@angular/core';

const FIREBASE_API = "AIzaSyCn8R5ojJ4IXqwpBseAR2tbiQoF4D3pev4"

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;

  constructor() {
  }

  ngOnInit() {
  }

}
