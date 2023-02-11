export class Parking{
  id?:string;
  name:string;
  address:string;
  lat:string;
  lng:string;
  slots:number;
}
export class User{
  id?: string;
  name: string;
  password: string;
  role: string;
}

export class Slot{
  id?:string;
  parkingID:string;
  parkingName:string;
  name:string;
  phoneNo:string;
  vehicleNo:string;
}
