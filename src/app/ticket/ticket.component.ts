import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {

  parking = {
    pname: 'Vivek Enterprise',
    paddress: 'Naroda,Ahmedabad',
    name: 'Vivek Panchal',
    vehicleNo:'GJ01-NX-7835',
    phoneNo:'9714084146',
    enterTime:'11/02/2023 7:30:00',
    exitTime: '11/02/2023 9:30:00'

  }

}
