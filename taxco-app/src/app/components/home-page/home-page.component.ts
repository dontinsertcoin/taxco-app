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

    //var mymap = L.map('mapid').setView([this.longitude, this.latitude], 16);
    const mymap = L.map('mapid').setView([this.latitude, this.longitude], 16);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZG9udGluc2VydGNvaW4iLCJhIjoiY2p3ODNpbDZlMDJkdjN5bXgwb2F3OWpsNiJ9.lyJhHXeNT2P4lSArgrjO4w'
    }).addTo(mymap);

    let marker = L.marker([this.latitude, this.longitude]).addTo(mymap);
    marker.bindPopup("Taxidermia Coin SL").openPopup();
    
    /*new Map({
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
    });*/
    //const mark = L.marker([this.longitude, this.latitude],this.icon).addTo(this.map);

    //var marker = L.marker([37.7858, -122.401], { title: "My marker" }).addTo(map);
    //L.marker([37.7858, -122.401]).addTo(this.map);

  }

}
