import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParkingeditComponent } from './parking/parkingedit/parkingedit.component';
import { ParkingaddComponent } from './parking/parkingadd/parkingadd.component';
import { ParkinglistComponent } from './parking/parkinglist/parkinglist.component';
import { ParkinghomeComponent } from './parking/parkinghome/parkinghome.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ParkingeditComponent,
    ParkingaddComponent,
    ParkinglistComponent,
    ParkinghomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
