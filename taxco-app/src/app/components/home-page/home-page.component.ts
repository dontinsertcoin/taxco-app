import { Component, OnInit } from '@angular/core';
import { Ng4TwitterTimelineService } from 'ng4-twitter-timeline/lib/index';
import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import Vector from 'ol/source/vector';
import { Icon, icon, Marker, marker } from 'leaflet';
declare let L;


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  videoUrl : string = 'https://www.youtube.com/watch?v=DBLFwHosi2c';
  map : any;
  latitude : number = 40.3949902; 
  longitude : number = -3.7335585;

  constructor(private ng4TwitterTimelineService: Ng4TwitterTimelineService){
 }

  ngOnInit() {

    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([this.longitude, this.latitude]),
        zoom: 1
      })
    });
    //L.marker(fromLonLat([this.longitude, this.latitude])).bindPopup('Taxidermia Coin SL').addTo(this.map);

    //var marker = L.marker([37.7858, -122.401], { title: "My marker" }).addTo(map);
    //L.marker([37.7858, -122.401]).addTo(this.map);

  }

}
