import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../material/ang-material/ang-material.component';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})

export class SlotComponent {
  otpInputShow = false;

  constructor(
    public dialogRef: MatDialogRef<SlotComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ){}
  SlotForm = new FormGroup({
    parkingId: new FormControl( ),
    name: new FormControl(),
    vehicleNo: new FormControl(),
    phoneNo: new FormControl()
  });

  onSubmit(){
    this.otpInputShow = true;
    console.log(this.SlotForm.value);
  }
}
