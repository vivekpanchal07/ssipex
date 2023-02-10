import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngMaterialComponent } from './material/ang-material/ang-material.component';
import { MapComponent } from './material/map/map.component';
import { ParkingaddComponent } from './parking/parkingadd/parkingadd.component';
import { ParkingeditComponent } from './parking/parkingedit/parkingedit.component';
import { ParkinghomeComponent } from './parking/parkinghome/parkinghome.component';
import { ParkinglistComponent } from './parking/parkinglist/parkinglist.component';

const routes: Routes = [

  // {path: '',component:ParkinghomeComponent},
  {path: '',component:AngMaterialComponent},
  {path: 'parkinglist',component:ParkinglistComponent},
  {path: 'parkingadd',component:ParkingaddComponent},
  {path: 'parkingedit/:id',component:ParkingeditComponent},
  {path: 'map',component:MapComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
