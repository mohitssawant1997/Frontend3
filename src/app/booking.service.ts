import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import { Observable } from 'rxjs';
import { BookingStatus } from './booking-status';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private url="http://localhost:8181/booking.api"
  constructor( private http:HttpClient) { }
  booking(customer:Customer):Observable<any[]>{
    console.log(customer)

    return this.http.post<any[]>(`${this.url}`,customer)
  }
}
