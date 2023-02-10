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
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngMaterialComponent } from './material/ang-material/ang-material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from './material/login/login.component';
import { AngularFireModule} from '@angular/fire/compat';
import { MapComponent } from './material/map/map.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ParkingeditComponent,
    ParkingaddComponent,
    ParkinglistComponent,
    ParkinghomeComponent,
    AngMaterialComponent,
    LoginComponent,
    MapComponent,
  ],
  entryComponents: [LoginComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ToastrModule.forRoot(),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatDialogModule,
    AngularFireModule.initializeApp({
        apiKey: "AIzaSyANMwip7EjdUBwQYPO-idCIfvA8L1MGW04",
        authDomain: "ssipex-alpha.firebaseapp.com",
        databaseURL: "https://ssipex-alpha-default-rtdb.firebaseio.com",
        projectId: "ssipex-alpha",
        storageBucket: "ssipex-alpha.appspot.com",
        messagingSenderId: "766361033187",
        appId: "1:766361033187:web:777f1451723a1e3ca2e8d6",
        measurementId: "G-BW6K140XCY"
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
