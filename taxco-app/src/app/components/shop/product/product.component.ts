import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  image: String;

  constructor(private http: HttpClient) { 
    this.http.get(FIREBASE_API);
  }

  ngOnInit() {
  }

}
