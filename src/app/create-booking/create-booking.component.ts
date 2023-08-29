import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Bookings } from '../mock-bookings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss']
})
export class CreateBookingComponent implements OnInit {

  constructor(private router: Router){ }

  booking: Booking = {
    id: 100,
    name: "Your Name",
    roomNumber: 110,
    startDate: new Date(), 
    endDate: new Date() 
  }

  ngOnInit(): void {
      
  }

  save(): void {
    Bookings.push(this.booking)
    this.router.navigate(["bookings"])
  }

 

}
