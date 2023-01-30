import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from '../data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parkinglist',
  templateUrl: './parkinglist.component.html',
  styleUrls: ['./parkinglist.component.css']
})
export class ParkinglistComponent {
  allParkingData:Data[]=[];

  constructor(private ds:DataService,private router:Router){
    this.getParkingList();
  }

  getParkingList(){
    this.ds.getData().subscribe((res:Data[])=>{
      this.allParkingData = res;
      console.log(this.allParkingData);
    })
  }
  onDelete(id:Number){
    this.ds.deleteData(id).subscribe();
    this.getParkingList();

  }
}


