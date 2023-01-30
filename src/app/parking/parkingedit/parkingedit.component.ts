import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from '../data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parkingedit',
  templateUrl: './parkingedit.component.html',
  styleUrls: ['./parkingedit.component.css']
})
export class ParkingeditComponent {

  formData:Data = {
    id: 0,
    name: '',
    address: '',
    lat: '',
    lng: '',
    slot: 0
  }

  constructor(private activatedRoute:ActivatedRoute,
              private router:Router,
              private ds:DataService){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      var id = Number(param.get('id'));
      this.getDetailByID(id);
    })

  }
  getDetailByID(id: number) {
    this.ds.getDataById(id).subscribe((data)=>{
      this.formData = data;
    });
  }
  updateParking(){
    this.ds.updateData(this.formData).subscribe({next:(data)=>{
      this.router.navigate(['../parkinglist'])
    },
    error:(err)=>{
      console.log(err);
    }})
  }

}
