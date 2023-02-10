import { Component, OnInit } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import * as L from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private map: L.Map;
  private centroid: L.LatLngExpression = [22.310696,73.192635];



  private initMap():void{
    this.map = L.map('map',{
      center: this.centroid,
      zoom: 13
    });

    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    // L.control.locate().addTo(this.map);


  }

  ngOnInit(): void {
    this.initMap();
    L.marker([22.31577, 73.13325]).addTo(this.map).bindPopup("Sai Valet Parking Services");
    L.marker([22.31921, 73.13861]).addTo(this.map).bindPopup("Gotri Lake Garden Free Parking");
    L.marker([22.27611, 73.16021]).addTo(this.map).bindPopup("Akshardwar Complex");
    L.marker([22.29413, 73.19229]).addTo(this.map).bindPopup("Laxmi Vilas Palace");
    L.marker([22.30927, 73.15273]).addTo(this.map).bindPopup("ISKON Temple Parking");
    L.marker([22.32235, 73.16726]).addTo(this.map).bindPopup("Inorbit Mall Parking");

  }
}
