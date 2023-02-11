import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs';
import { Slot } from '../material/ang-material/parkings';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {

  constructor(private http:HttpClient){

  }
  dataSource: MatTableDataSource<Slot>;
  allSlots: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['name','phoneNo','vehicleNo','pName','time'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private fetchParking():void {
    this.http.get<{[key: string]: Slot}>('https://ssipex-alpha-default-rtdb.firebaseio.com/slot.json')
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
      this.allSlots = res;
      this.dataSource = new MatTableDataSource(this.allSlots)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

}
