import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-booking',
  templateUrl: './customer-booking.component.html',
  styleUrls: ['./customer-booking.component.css']
})
export class CustomerBookingComponent implements OnInit {
  arr:any[] | undefined;
  showMsg:boolean=false;
  showBooking:boolean=false;
  bookingId: number=0;
  message=""
  numberofseats: number=0;
  totalfare!: DoubleRange;
  dateofbooking!:Date;
  constructor(private service:BookingService) { }
  customer:Customer=new Customer();

  ngOnInit(): void {
  }
  viewbooking(){

    this.service.booking(this.customer).subscribe(
      result=>{
       this.arr=result;
for(const res of result){
         if(res[5]==true){
        this.showBooking=true;
        this.bookingId=res[0];
        this.numberofseats=res[1];
        this.totalfare=res[3];
        this.dateofbooking=res[4];
         }
         else{
        
        this.showMsg=true;
        this.message=res.messageIfAny;
               
      }
    }
     }

    )

  } 



}