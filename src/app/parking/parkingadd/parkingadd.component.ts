import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from '../data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parkingadd',
  templateUrl: './parkingadd.component.html',
  styleUrls: ['./parkingadd.component.css']
})
export class ParkingaddComponent {
  constructor(private ds:DataService,
              private router:Router){
  }

  formData:Data = {
    id: 0,
    name: '',
    address: '',
    lat: '',
    lng: '',
    slot: 0
  }

  postParking(){
    this.ds.createData(this.formData).subscribe({next:(res)=>{
      this.router.navigate(['../parkinglist'])
    },
    error:(err)=>{
      console.log(err);
    }})
  }

}
