import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ang-material',
  templateUrl: './ang-material.component.html',
  styleUrls: ['./ang-material.component.css']
})
export class AngMaterialComponent {

  constructor(public formBuilder: FormBuilder,private toastr: ToastrService){

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
    this.ParkingForm.reset();
    this.toastr.success('Success', 'Data Submitted Successfully',{timeOut:3000});
  }
}
