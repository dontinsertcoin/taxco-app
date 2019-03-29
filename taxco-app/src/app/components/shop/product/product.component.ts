import { Component, OnInit } from '@angular/core';
import { Image } from '../../shared/image/image.component';
import { HttpClient } from '@angular/common/http';

const FIREBASE_API = "AIzaSyCn8R5ojJ4IXqwpBseAR2tbiQoF4D3pev4"

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  id: String;
  name: String;
  price: Number;
  quantity: Number;
  photo: Image;

  constructor(private http: HttpClient) { 
    this.http.get(FIREBASE_API);
  }

  ngOnInit() {
  }

}
