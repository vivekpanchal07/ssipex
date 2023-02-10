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
    L.marker([22.310696, 73.192635]).addTo(this.map).bindPopup("New Location");
    L.marker([22.410800, 73.392700]).addTo(this.map).bindPopup('');
    
  }
}
