import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource  } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { Parking } from './parkings';

@Component({
  selector: 'app-ang-material',
  templateUrl: './ang-material.component.html',
  styleUrls: ['./ang-material.component.css']
})
export class AngMaterialComponent implements OnInit {
  allParkings: Parking[] = [];
  dataSource: MatTableDataSource<Parking>;
  isLoading: boolean = false;
  editMode: boolean = false;
  currentParkingID:string = "";

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['name','address','slot','lat','lng','action'];

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

  ngOnInit(): void {
    this.fetchParking();
  }



  onSubmit(){

    if(!this.editMode){
      console.log(this.ParkingForm.value);
      this.http.post<{name:string}>('https://ssipex-alpha-default-rtdb.firebaseio.com/parking.json',this.ParkingForm.value).
      subscribe(res =>{
      console.log(res);
      this.fetchParking();
      })
      this.ParkingForm.reset();
      this.toastr.success('Success', 'Data Submitted Successfully',{timeOut:3000});
    }else{
      const id = this.currentParkingID;
      // console.log(id);
      this.http.put('https://ssipex-alpha-default-rtdb.firebaseio.com/parking/'+id+'.json',this.ParkingForm.value).
      subscribe(
        res =>{
          {this.fetchParking();}
        }
      );
      this.ParkingForm.reset();
      this.editMode = false;
    }

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  removeParking(id: string){
    console.log(id);
    this.http.delete('https://ssipex-alpha-default-rtdb.firebaseio.com/parking/'+id+'.json').
    subscribe(res =>{
      {this.fetchParking();}
    }
    );
    this.toastr.error('Success', 'Data Removed Successfully',{timeOut:3000});

  }
  editParking(id: string){
    this.currentParkingID = id;
    this.editMode = true;
    let currentParking = this.allParkings.find(p => {return p.id === id});
    // console.log(currentParking);
    this.ParkingForm.setValue({
      name: currentParking.name,
      address: currentParking.address,
      slot: currentParking.slot,
      lat: currentParking.lat,
      lng:currentParking.lng,
    })
  }

  resetForm(){
    this.editMode = false;
    this.ParkingForm.reset();
  }

  private fetchParking():void {
    this.isLoading = true;
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
      this.dataSource = new MatTableDataSource(this.allParkings)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    })
  }

}
