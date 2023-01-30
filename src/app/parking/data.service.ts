import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseURL: string = 'http://localhost:3000/parkingdb'

  constructor(private http: HttpClient) {

  }

  public getData(): Observable<Data[]>
  {
    return this.http.get<Data[]>(this.baseURL);
  }

  public createData(data:Data)
  {
    return this.http.post<Data>(this.baseURL,data);
  }

  public getDataById(id:number){
    return this.http.get<Data>(`http://localhost:3000/parkingdb/${id}`);
  }
  public updateData(data:Data){
    return this.http.put<Data>(`http://localhost:3000/parkingdb/${data.id}`,data);
  }

  public deleteData(id:Number):Observable<Data>{
    return this.http.delete<Data>(`http://localhost:3000/parkingdb/${id}`);
  }
}
