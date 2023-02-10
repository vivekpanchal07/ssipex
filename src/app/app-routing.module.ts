import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngMaterialComponent } from './material/ang-material/ang-material.component';
import { MapComponent } from './material/map/map.component';
import { ParkingBookComponent } from './parking-book/parking-book.component';
import { ParkingaddComponent } from './parking/parkingadd/parkingadd.component';
import { ParkingeditComponent } from './parking/parkingedit/parkingedit.component';
import { ParkinglistComponent } from './parking/parkinglist/parkinglist.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [

  // {path: '',component:ParkinghomeComponent},
  {path: '',component:AngMaterialComponent},
  {path: 'parkinglist',component:ParkinglistComponent},
  {path: 'parkingadd',component:ParkingaddComponent},
  {path: 'parkingedit/:id',component:ParkingeditComponent},
  {path: 'map',component:MapComponent},
  {path: 'ticket/:id',component:TicketComponent},
  {path: 'parking/:id',component:ParkingBookComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
