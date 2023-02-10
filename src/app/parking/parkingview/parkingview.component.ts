import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/material/ang-material/ang-material.component';

@Component({
  selector: 'app-parkingview',
  templateUrl: './parkingview.component.html',
  styleUrls: ['./parkingview.component.css']
})
export class ParkingviewComponent {
  myAngularxQrCode: string;

  constructor(
    public dialogRef: MatDialogRef<ParkingviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ){
      this.myAngularxQrCode = 'http://localhost:4200/parking/'+data.modalParkingId;
    }


}
