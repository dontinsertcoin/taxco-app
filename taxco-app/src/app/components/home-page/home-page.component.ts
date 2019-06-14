import { Component, OnInit } from '@angular/core';
import { Ng4TwitterTimelineService } from 'ng4-twitter-timeline/lib/index';
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
    const mymap = L.map('mapid').setView([this.latitude, this.longitude], 16);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZG9udGluc2VydGNvaW4iLCJhIjoiY2p3ODNpbDZlMDJkdjN5bXgwb2F3OWpsNiJ9.lyJhHXeNT2P4lSArgrjO4w'
    }).addTo(mymap);

    let marker = L.marker([this.latitude, this.longitude]).addTo(mymap);
    marker.bindPopup("Taxidermia Coin SL").openPopup();

  }

}
