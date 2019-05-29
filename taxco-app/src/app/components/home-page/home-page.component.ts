import { Component, OnInit } from '@angular/core';
import { Ng4TwitterTimelineService } from 'ng4-twitter-timeline/lib/index';
import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import SourceVector from 'ol/source/vector';
import LayerVector from 'ol/layer/vector';
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

  icon = {
    icon: L.icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 0 ],
      iconUrl: './node_modules/leaflet/dist/images/marker-icon.png',
      shadowUrl: './node_modules/leaflet/dist/images/marker-shadow.png'
   })
  };
  constructor(private ng4TwitterTimelineService: Ng4TwitterTimelineService){
 }

  ngOnInit() {

    /*let source = new SourceVector({wrapX: false});

    var vector = new LayerVector({
      source: source
    });*/

    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
        //, vector
      ],
      view: new View({
        center: fromLonLat([this.longitude, this.latitude]),
        zoom: 16
      })
    });
    //const mark = L.marker([this.longitude, this.latitude],this.icon).addTo(this.map);

    //var marker = L.marker([37.7858, -122.401], { title: "My marker" }).addTo(map);
    //L.marker([37.7858, -122.401]).addTo(this.map);

  }

}
