import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Parking } from '../material/ang-material/parkings';

@Component({
  selector: 'app-parking-book',
  templateUrl: './parking-book.component.html',
  styleUrls: ['./parking-book.component.css']
})
export class ParkingBookComponent {
  pname = '';
  paddress = '';
  allParkings: any[];
  otpInputShow = false;
  parkingID: string;
  SlotForm = new FormGroup({
    vehicleNo: new FormControl(),
    name: new FormControl(),
    phoneNo: new FormControl(),


  })

  constructor(private activatedRoute:ActivatedRoute,
    private http: HttpClient,){}

  ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe((param)=>{
      this.parkingID = String(param.get('id'));
    })
    this.getParkingDetailByID(this.parkingID);

  }

  getParkingDetailByID(id: string) {

    this.http.get<{[key: string]: Parking}>('https://ssipex-alpha-default-rtdb.firebaseio.com/parking.json')
    .pipe(map((res)=>{
      const parkings = [];
      for(const key in res) {
        if(res.hasOwnProperty(key)){
          parkings.push({...res[key],id: key});
        }
      }
      return parkings;
    })).
    subscribe(res => {
      // console.log(res);
      this.allParkings = res;
      let currentParking = this.allParkings.find(p => {return p.id === this.parkingID});

      this.pname = currentParking.name,
      this. paddress= currentParking.address

    })
  }

  getOTP(){
    this.otpInputShow = true;
  }

  onSubmit(){
    console.log(this.SlotForm.value);
  }

}
