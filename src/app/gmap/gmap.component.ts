import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { MatTableDataSource } from '@angular/material/table';
import { LatLngExpression } from 'leaflet';
import { map } from 'rxjs';
import { LocationService } from '../location.service';
import { Parking } from '../material/ang-material/parkings';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css'],
})
export class GmapComponent implements OnInit {
  allParkings: any[];
  curloc: any;
  constructor(private locationService: LocationService,
              private http: HttpClient) {}

  // async ngOnInit(): Promise<void> {
  //   const position: any = await this.locationService.getCurrentLocation();
  //   this.curloc = new google.maps.LatLng(position);
  //   if (!navigator.geolocation) {
  //     console.log('Location not supported');
  //   }
  //   navigator.geolocation.getCurrentPosition((position) => {

  //     // console.log(
  //     //   `latt: ${position.coords.latitude}, lon: ${position.coords.longitude}`
  //     // );
  //   });
  //   this.watchPosition();
  // }
  // watchPosition() {
  //   navigator.geolocation.watchPosition(
  //     (position) => {
  //       // console.log(
  //       //   `late: ${position.coords.latitude}, lon: ${position.coords.longitude}`
  //       // );
  //     //  this.curloc = position;
  //     //  console.log(this.curloc.coords.longitude);
  //     },
  //     (err) => {
  //       console.log(err);
  //     },
  //     {
  //       enableHighAccuracy: false,
  //       timeout: 5000,
  //       maximumAge: 0,
  //     }
  //   );
  // }

  ngOnInit(): void {
      navigator.geolocation.getCurrentPosition(position => {
        this.curloc = {
          lat : position.coords.latitude,
          lng : position.coords.longitude
        }
      })
  }

  markerdata: any;
  display: any;
  center: google.maps.LatLngLiteral = { lat: 22.310696, lng: 73.192635 };
  zoom = 13;
  // cuuuur = position.coords.latitude;
  markerPositions = [
    { lat: 22.31577, lng: 73.13325 , name:'Sai Valet Parking Services' },
    { lat: 22.31921, lng: 73.13861 , name:'Gotri Lake Garden Free Parking' },
    { lat: 22.27611, lng: 73.16021 , name:'Akshardwar Complex' },
    { lat: 22.29413, lng: 73.19229 , name:'Laxmi Vilas Palace' },
    { lat: 22.30927, lng: 73.15273 , name:'ISKON Temple Parking' },
    { lat: 22.32235, lng: 73.16726 , name:'Inorbit Mall Parking' }
  ];
  markerOptions: google.maps.MarkerOptions = { draggable: false};

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      this.display = event.latLng.toJSON();
    }
  }

  public openInfoWindow(marker: MapMarker, infoWindow: MapInfoWindow) {
    infoWindow.open(marker);
}
}
