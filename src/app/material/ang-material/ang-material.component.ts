import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ang-material',
  templateUrl: './ang-material.component.html',
  styleUrls: ['./ang-material.component.css']
})
export class AngMaterialComponent {

  constructor(public formBuilder: FormBuilder,
              private toastr: ToastrService,
              private http: HttpClient){

  }
  ParkingForm = new FormGroup({
    name: new FormControl(),
    address: new FormControl(),
    slot: new FormControl(),
    lat:new FormControl(),
    lng:new FormControl(),
  })

  onSubmit(){
    console.log(this.ParkingForm.value);
    this.http.post('https://ssipex-alpha-default-rtdb.firebaseio.com/parking.json',this.ParkingForm.value).
    subscribe(res =>{
      console.log(res);
    })
    this.ParkingForm.reset();
    this.toastr.success('Success', 'Data Submitted Successfully',{timeOut:3000});
  }
}
