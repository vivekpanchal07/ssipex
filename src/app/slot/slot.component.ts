import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { DialogData } from '../material/ang-material/ang-material.component';
import { Slot } from '../material/ang-material/parkings';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})

export class SlotComponent implements OnInit {
  otpInputShow = false;
  newSlot: Object;
  allSlots: any[];
  TimeStamp: string;

  constructor(
    public dialogRef: MatDialogRef<SlotComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private http: HttpClient,private router:Router,
    public datepipe: DatePipe
    ){    }
  SlotForm = new FormGroup({
    parkingId: new FormControl(this.data.modalParkingId),
    name: new FormControl(),
    vehicleNo: new FormControl(),
    phoneNo: new FormControl(),
    entryTimeStamp: new FormControl(),
    exitTimeStamp: new FormControl()
  });

  ngOnInit(): void {
    this.TimeStamp = this.datepipe.transform((new Date), 'dd/MM/yyyy h:mm a');
    this.fetchAllSlots();

  }

  getOTP(){
    this.otpInputShow = true;
  }

  submit(){
    this.SlotForm.patchValue({entryTimeStamp: this.TimeStamp});
    console.log(this.SlotForm.value);
    this.http.post('https://ssipex-alpha-default-rtdb.firebaseio.com/slot.json',this.SlotForm.value).
    subscribe(res =>{
      this.newSlot = res;
    })
    this.dialogRef.close();
    this.router.navigate(['ticket'])
    this.SlotForm.reset();
  }

  getSlotDetailByPhone(phoneNo: string){
      let currentSlot = this.allSlots.find(p => {return p.phoneNo === phoneNo});
      console.log("it is ",currentSlot);
  }

  fetchAllSlots(){
    this.http.get<{[key: string]: Slot}>('https://ssipex-alpha-default-rtdb.firebaseio.com/slot.json')
    .pipe(map((res)=>{
      const slots = [];
      for(const key in res) {
        if(res.hasOwnProperty(key)){
          slots.push({...res[key],id: key});
        }
      }
      return slots;
    })).
    subscribe(res => {

      this.allSlots = res;
      console.log(this.allSlots);
    })
  }
}
